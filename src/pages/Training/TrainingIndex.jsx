import React, { useState } from "react";
import DefaultHelmet from "../../components/DefaultHelmet";
import HeroTraining from "./HeroTraining.jsx";
// import Statistics from "./Statistics.jsx";
import Dedication from "./Dedication.jsx";
import OurCoursesTraining from "./OurCoursesTraining.jsx";
import NextCohortTraining from "./NextCohortTraining.jsx";
import WhyLearnFromUs from "./WhyLearnFromUs.jsx";
import GalleryTraining from "./GalleryTraining.jsx";
import TestimonialTraining from "./TestimonialTraining.jsx";
import FAQTraining from "./FAQTraining.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { z } from "zod";
import Button from "../../components/Button";
import Input from "../../components/Inputs";
import { contactUsForTraining } from "../../services/contactForm";
import useDelay from "../../hooks/useDelay";
import { motion } from "framer-motion";
import FormModal from "../../components/modals/FormModal.jsx";
import { loadPaystackScript } from "../../utilities/loadPaystackScript";
import PaymentChoiceModal from "../../components/modals/PaymentChoiceModal.jsx";
import jsPDF from "jspdf";
import KinplusLogoPDF from "../../assets/logoBase64.js";
import PaymentAmountModal from "../../components/modals/PaymentAmountModal.jsx";
import PaymentSuccessModal from "../../components/modals/PaymentSuccessModal.jsx";
// import { Link } from "react-router-dom";


// validation schema
const contactUsTrainingSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .regex(/^[a-zA-Z\s]+$/, "Full Name must contain only alphabets"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .regex(/^\d{11}$/, "Phone number must be exactly 11 digits"),
  religion: z.string().min(1, "Religion is required"),
  dateOfBirth: z.preprocess(
    (val) => (val ? new Date(val) : null),
    z
      .date()
      .max(new Date("2010-12-31"), "Date of birth must be before 2010-12-31")
  ),
  gender: z.string().min(1, "Gender is required"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  track: z.string().min(1, "Track is required"),
  trackPackage: z.string().min(1, "Track Package is required"),
  availability: z.string().min(1, "Availability is required"),
});

export default function Training() {
  const delay = useDelay();
  const [isLoading, setIsLoading] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactUsTrainingSchema),
    mode: "onChange",
  });
  
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);


  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Paystack Integration functionality
  const handlePaystackPayment = async ({ email, amount, fullName, track }) => {
    const scriptLoaded = await loadPaystackScript();

    if (!scriptLoaded) {
      alert(
        "Failed to load Paystack. Please check your internet and try again."
      );
      return;
    }

    const paystack = window.PaystackPop.setup({
      key: "pk_test_afd9bb9d64abc7638f5d453e0ebdfcd29319c5d2", // replace with real key
      email,
      amount: amount * 100, // amount in kobo
      currency: "NGN",
      callback: () => {
          setShowSuccessModal(true);
      },
      onClose: () => {
          alert("Payment window closed.");
      },
    });

    paystack.openIframe();
  };


  // Helper function to generate PDF receipt for users that paid online
  const generatePDFReceipt = ({ fullName, email, track, amount }) => {
    const doc = new jsPDF();

    const logoBase64 = KinplusLogoPDF; // base64 logo here

    // Add the image at the top
    doc.addImage(logoBase64, "PNG", 20, 10, 40, 20); // (image, format, x, y, width, height)

    doc.setFontSize(16);
    doc.text("Kinplus Technologies", 70, 20); // Will align title  beside logo
    doc.setFontSize(12);
    doc.text("Training Payment Receipt", 70, 30);

    doc.setFontSize(12);
    doc.text(`Name: ${fullName}`, 20, 60);
    doc.text(`Email: ${email}`, 20, 70);
    doc.text(`Track: ${track}`, 20, 80);
    doc.text(`Amount Paid: ₦${amount.toLocaleString()}`, 20, 90);

    const date = new Date();
    doc.text(
      `Date: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
      20,
      100
    );

    doc.save("training_payment_receipt.pdf");
  };

  // Helper function to generate image receipt for users that paid online
  const generateImageReceipt = ({ fullName, email, track, amount }) => {
    const canvas = document.createElement("canvas");
    canvas.width = 500;
    canvas.height = 300;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const logo = new Image();
    logo.src = KinplusLogoPDF;

    logo.onload = () => {
      ctx.drawImage(logo, 20, 20, 60, 30);
      ctx.fillStyle = "#000";
      ctx.font = "16px Arial";
      ctx.fillText("Kinplus Technologies", 100, 40);
      ctx.fillText("Training Payment Receipt", 100, 65);

      ctx.font = "14px Arial";
      ctx.fillText(`Name: ${fullName}`, 20, 110);
      ctx.fillText(`Email: ${email}`, 20, 130);
      ctx.fillText(`Track: ${track}`, 20, 150);
      ctx.fillText(`Amount Paid: ₦${amount.toLocaleString()}`, 20, 170);
      ctx.fillText(`Date: ${new Date().toLocaleString()}`, 20, 190);

      const link = document.createElement("a");
      link.download = "training_payment_receipt.png";
      link.href = canvas.toDataURL();
      link.click();
    };
  };



  // Hook to handle user's email, track and payment package for Paystack.
  const [userEmail, setUserEmail] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [showChoiceModal, setShowChoiceModal] = useState(false);
  const [userName, setUserName] = useState(""); 
  const [userTrack, setUserTrack] = useState("");

  // Hook to pop up amount and payment success modals
  const [showAmountModal, setShowAmountModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    await delay(2000);

    try {
      await contactUsForTraining(
        data.fullName,
        data.email,
        data.phoneNumber,
        data.religion,
        data.dateOfBirth,
        data.gender,
        data.address,
        data.track,
        data.trackPackage,
        data.availability
      );
      toast.success("Form submitted successfully");
      reset();
      setUserEmail(data.email);
      setUserName(data.fullName);
      setUserTrack(data.track);

      // Setting amount based on selected track
      const amount = data.trackPackage.includes("180,000")
        ? 180000
        : data.trackPackage.includes("250,000")
        ? 250000
        : data.trackPackage.includes("200,000")
        ? 200000
        : 300000;

      setPaymentAmount(amount);
      setShowChoiceModal(true); // open choice modal
      // setIsFormModalOpen(true); // Open modal
    } catch (error) {
      console.log("From client:", error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const trackOptions = [
    { title: "Web Development", value: "Web Development" },
    { title: "Cybersecurity", value: "Cybersecurity" },
    { title: "Product Design", value: "Product Design" },
    { title: "Graphic Design", value: "Graphic Design" },
    { title: "Data Analysis", value: "Data Analysis" },
    { title: "Digital Marketing", value: "Digital Marketing" },
  ];

  const packageOptions = [
    { title: "Standard (3 Months: 180,000)", value: "Standard (3 Months: 180,000)" },
    { title: "Premium (5 Months: 250,000)", value: "Premium (5 Months: 250,000)" },
  ];

  const marketingOptions = [
    { title: "Standard (3 Months: 200,000)", value: "Standard (3 Months: 200,000)" },
    { title: "Premium (5 Months: 300,000)", value: "Premium (5 Months: 300,000)" },
  ];

  const genderInput = [
    { title: "Male", value: "Male" },
    { title: "Female", value: "Female" },
  ];

  const religionOptions = [
    { title: "Christianity", value: "Christianity" },
    { title: "Islam", value: "Islam" },
    { title: "Traditional", value: "Traditional" },
  ];

  const selectedTrack = watch("track");

  let dynamicPackageOptions = packageOptions;

  if (selectedTrack === "Digital Marketing") {
    dynamicPackageOptions = marketingOptions;
  }

  const slideInRight = {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };


  return (
    <>
      <DefaultHelmet
        title="Training Opportunities | Kinplus Technologies"
        description="Explore our diverse training programs and discover how Kinplus Technologies is empowering the next generation of tech experts."
        url="https://www.kinplusgroup.com/training"
        image="https://www.kinplusgroup.com/kinplus-opengraph-image.png"
      />

      <div className="overflow-hidden">
        <HeroTraining />

        {/* <Statistics /> */}
        <Dedication />
        <OurCoursesTraining />
        <NextCohortTraining />

        {/* Form */}
        <div className="max-w-[90vw] mt-[8vh] lg:mt-[20vh] mx-auto">
          <motion.div
            {...slideInRight}
            className="w-full mt-8 bg-blue-950 rounded-[0.9375rem] text-white mx-auto p-10"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="mx-auto ">
              <h3 className="text-[2.75rem] leading-[3.375rem] capitalize font-[700] ">
                Register With Us For Training
              </h3>
              <div className="grid sm:grid-flow-row gap-2">
                {/* Group 1 */}
                <div className="grid gap-3 sm:grid-cols-2 items-center">
                  <div>
                    <Input
                      type="text"
                      name="Full Name"
                      placeholder="Enter your Full Name"
                      isRequired={true}
                      {...register("fullName")}
                    />
                    {errors.fullName && (
                      <p className="text-red-500">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <Input
                      type="email"
                      name="Email"
                      placeholder="Enter your E-Mail"
                      isRequired={true}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Group 2 */}
                <div className="grid gap-3 sm:grid-cols-2 items-center">
                  <div>
                    <Input
                      type="text"
                      name="Phone Number"
                      placeholder="Enter your Phone Number"
                      isRequired={true}
                      maxLength={11}
                      {...register("phoneNumber")}
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>

                  <div className="relative">
                    <Input
                      type="select"
                      name="religion"
                      placeholder="Select your Religion"
                      options={religionOptions}
                      isSelect={activeDropdown === "religion"}
                      setIsSelect={() => handleDropdownToggle("religion")}
                      error={errors.religion?.message}
                      selected={watch("religion")}
                      setSelected={(value) => setValue("religion", value)}
                    />
                    {/* {errors.religion && (
                      <p className="text-red-500 absolute -bottom-5">
                        {errors.religion.message}
                      </p>
                    )} */}
                  </div>
                </div>

                {/* Group 3 */}
                <div className="grid gap-3 sm:grid-cols-2 items-center">
                  <div className="relative">
                    <Input
                      type="date"
                      name="Date of Birth"
                      placeholder="Date of Birth"
                      isRequired={true}
                      max="2010-12-31"
                      {...register("dateOfBirth")}
                    />
                    {errors.dateOfBirth && (
                      <p className="text-red-500 absolute -bottom-5">
                        {errors.dateOfBirth.message}
                      </p>
                    )}
                  </div>

                  <div className="relative">
                    <Input
                      type="select"
                      name="gender"
                      placeholder="Gender"
                      options={genderInput}
                      isSelect={activeDropdown === "gender"}
                      setIsSelect={() => handleDropdownToggle("gender")}
                      error={errors.gender?.message}
                      selected={watch("gender")}
                      setSelected={(value) => setValue("gender", value)}
                    />
                    {errors.gender && (
                      <p className="text-red-500 absolute -bottom-5">
                        {errors.gender.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Group 4 */}
                <div className="grid gap-3 sm:grid-cols-2 items-center">
                  <div>
                    <Input
                      type="text"
                      name="Address"
                      placeholder="Enter your Address"
                      isRequired={true}
                      {...register("address")}
                    />
                    {errors.address && (
                      <p className="text-red-500">{errors.address.message}</p>
                    )}
                  </div>

                  <div>
                    <Input
                      type="select"
                      name="track"
                      placeholder="Select Learning Track"
                      options={trackOptions}
                      isSelect={activeDropdown === "track"}
                      setIsSelect={() => handleDropdownToggle("track")}
                      error={errors.track?.message}
                      selected={watch("track")}
                      setSelected={(value) => setValue("track", value)}
                    />
                  </div>
                </div>

                {/* Group 5 */}
                <div className="grid gap-3 sm:grid-cols-2 items-center">
                  <div>
                    <Input
                      type="select"
                      name="trackPackage"
                      placeholder="Select payment package"
                      options={dynamicPackageOptions}
                      isSelect={activeDropdown === "trackPackage"}
                      setIsSelect={() => handleDropdownToggle("trackPackage")}
                      error={errors.trackPackage?.message}
                      selected={watch("trackPackage")}
                      setSelected={(value) => setValue("trackPackage", value)}
                    />
                  </div>
                </div>
                <div className="py-3">
                  <p className="text-xl text-white">
                    How will you be available for the training?
                  </p>
                  <Input
                    type="checkbox"
                    name="availability"
                    radioText="Online/Virtual"
                    isChecked={watch("availability") === "Online/Virtual"}
                    onCheck={() => setValue("availability", "Online/Virtual")}
                    error={errors.availability?.message}
                  />
                  <Input
                    type="checkbox"
                    name="availability"
                    radioText="Onsite/Physical"
                    isChecked={watch("availability") === "Onsite/Physical"}
                    onCheck={() => setValue("availability", "Onsite/Physical")}
                    error={errors.availability?.message}
                  />
                  <Input
                    type="checkbox"
                    name="availability"
                    radioText="Hybrid"
                    isChecked={watch("availability") === "Hybrid"}
                    onCheck={() => setValue("availability", "Hybrid")}
                    error={errors.availability?.message}
                  />
                </div>
              </div>

              <div className="text-center mt-[10px] py-9 w-40 mx-auto">
                <Button
                  text="Submit"
                  isLoading={isLoading}
                  type="customizedWhite"
                />
              </div>
            </form>
          </motion.div>
          <PaymentChoiceModal
            isOpen={showChoiceModal}
            onPayNow={() => {
              setShowChoiceModal(false);
              setShowAmountModal(true);
            }}
            onPayOnsite={() => {
              setShowChoiceModal(false);
              setIsFormModalOpen(true);
            }}
            onClose={() => setShowChoiceModal(false)}
          />

          <PaymentAmountModal
            isOpen={showAmountModal}
            amount={paymentAmount}
            onClose={() => setShowAmountModal(false)}
            onPay={(type) => {
              setShowAmountModal(false);
              const finalAmount =
                type === "60" ? Math.floor(paymentAmount * 0.6) : paymentAmount;

              handlePaystackPayment({
                email: userEmail,
                amount: finalAmount,
                fullName: userName,
                track: userTrack,
              });
            }}
          />

          <PaymentSuccessModal
            isOpen={showSuccessModal}
            onDownloadPDF={() =>
              generatePDFReceipt({
                fullName: userName,
                email: userEmail,
                track: userTrack,
                amount: paymentAmount,
              })
            }
            onDownloadImage={() =>
              generateImageReceipt({
                fullName: userName,
                email: userEmail,
                track: userTrack,
                amount: paymentAmount,
              })
            }
            onClose={() => setShowSuccessModal(false)}
          />

          <FormModal
            isOpen={isFormModalOpen}
            onClose={() => setIsFormModalOpen(false)}
            message="Thank you for registering! You have chosen to pay onsite. Please complete your payment at our office: Kinplus Technologies, 2nd Floor, Christore Building, Opp. Crunchies Restaurant, Similoluwa, Ado Ekiti, Ekiti State, Nigeria. We are open from Monday - Friday, 9AM - 5PM. We look forward to seeing you!"
          />
        </div>

        <WhyLearnFromUs />
        <GalleryTraining />
        <TestimonialTraining />
        <FAQTraining />
      </div>
    </>
  );
}
