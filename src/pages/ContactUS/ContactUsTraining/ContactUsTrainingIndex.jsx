import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { z } from "zod";
import Button from "../../../components/Button";
import PageLayout from "../../../components/Layout/PageLayout";
import Input from "../../../components/Inputs";
import { contactUsForTraining } from "../../../services/contactForm";
import useDelay from "../../../hooks/useDelay";
import { motion } from "framer-motion";
import DefaultHelmet from "../../../components/DefaultHelmet";
import FormModal from "../../../components/FormModal";
import { loadPaystackScript } from "../../../utilities/loadPaystackScript";
import PaymentChoiceModal from "../../../components/modals/PaymentChoiceModal.jsx";
import jsPDF from "jspdf";
import KinplusLogoPDF from "../../../assets/logoBase64.js";
// import PaymentAmountModal from "../../../components/modals/PaymentAmountModal.jsx";
import PaymentSuccessModal from "../../../components/modals/PaymentSuccessModal.jsx";



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

export default function ContactUsTraining() {
  const delay = useDelay();
  const [isLoading, setIsLoading] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactUsTrainingSchema),
    mode: "onChange",
  });

  useEffect(() => {
    register("religion", { required: "Religion is required" });
  }, [register]);

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
      key: import.meta.env.VITE_REACT_APP_PAYSTACK_PUBLIC_LIVE_KEY_PROD, // Company's actual public key
      // key: "pk_test_afd9bb9d64abc7638f5d453e0ebdfcd29319c5d2", // test public key
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
  const generatePDFReceipt = ({
    fullName,
    email,
    phoneNumber,
    availability,
    track,
    amount,
    trackPackage,
  }) => {
    const doc = new jsPDF();
    const logoBase64 = KinplusLogoPDF;
    const primaryColor = "#3A85FF";
    const borderColor = "#cccccc";
    const pageWidth = doc.internal.pageSize.getWidth();

    const packageName = trackPackage.split(" ")[0]; // Extract "Premium" from "Premium (₦250,000)"

    // Background
    doc.setFillColor(245, 245, 245);
    doc.rect(10, 10, 190, 130, "F");

    // Header Logo (slightly lowered)
    doc.addImage(logoBase64, "PNG", 160, 18, 20, 10); // y: 18 positions it better

    // Company Name (vertically centered with logo)
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(primaryColor);
    doc.text("Kinplus Technologies Limited", 15, 26); // y: 26 aligns well with logo

    // Title - Centered with better spacing below
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0);
    doc.text("Training Payment Receipt", pageWidth / 2, 45, {
      align: "center",
    });

    // New Y-start for next block with more space below title
    let yStart = 65;

    // Address block (left-aligned)
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text("Kinplus Technologies", 15, yStart);
    doc.text("2nd Floor, Christore Building", 15, yStart + 6);
    doc.text("Opp. Crunchies Restaurant", 15, yStart + 12);
    doc.text("Similoluwa, Ado-Ekiti", 15, yStart + 18);
    doc.text("08116400858, 07075199782", 15, yStart + 24);


    // Payer Details (aligned horizontally with address block)
    const rightStartY = yStart;
    const now = new Date();
    doc.text(`Payment Date: ${now.toLocaleDateString()}`, 115, rightStartY);
    doc.text(`Payer: ${fullName}`, 115, rightStartY + 6);
    doc.text(`Email: ${email}`, 115, rightStartY + 12);
    doc.text(`Phone: ${phoneNumber}`, 115, rightStartY + 18);
    doc.text(`Training Type: ${availability}`, 115, rightStartY + 24);

    // Table Header
    doc.setDrawColor(borderColor);
    doc.setFillColor(220, 220, 220);
    doc.setFont("helvetica", "bold");
    doc.rect(15, 100, 180, 10, "FD");
    doc.text("Training Track", 20, 107);
    doc.text("Package", 100, 107);
    doc.text("Amount (NGN)", 160, 107);

    // Table Content
    doc.setFont("helvetica", "normal");
    doc.setFillColor(255, 255, 255);
    doc.rect(15, 110, 180, 10, "FD");
    doc.text(track, 20, 117);
    doc.text(packageName, 100, 117);
    doc.text(`${amount.toLocaleString()}`, 160, 117);

    // Save
    setTimeout(() => {
      doc.save("kinplus_training_payment_receipt.pdf");
    }, 0);
  };

  // Helper function to generate image receipt for users that paid online
  const generateImageReceipt = ({
    fullName,
    email,
    phoneNumber,
    availability,
    track,
    amount,
    trackPackage,
  }) => {
    const canvas = document.createElement("canvas");
    canvas.width = 700; // Reduced the width here to match a typical A4 ratio
    canvas.height = 550; // Increased the height here slightly for more vertical space
    const ctx = canvas.getContext("2d");

    // Background
    ctx.fillStyle = "#f5f5f5";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const logo = new Image();
    logo.crossOrigin = "anonymous";
    logo.src = KinplusLogoPDF;

    const safePackageName = (trackPackage || "").split(" ")[0];

    // Trying to debug if the trackPackage gets to the generateImageReceipt function
    console.log("Image Receipt Data:", {
      fullName,
      email,
      phoneNumber,
      availability,
      track,
      amount,
      trackPackage,
    });

    logo.onload = () => {
      // Header: Company name and logo
      const logoWidth = 60;
      const logoHeight = 30;
      const logoX = canvas.width - logoWidth - 30;
      const logoY = 30;
      ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);

      ctx.fillStyle = "#3A85FF";
      ctx.font = "bold 24px Helvetica";
      ctx.textAlign = "left";
      ctx.fillText(
        "Kinplus Technologies Limited",
        30,
        logoY + logoHeight / 2 + 8
      );

      // Title
      ctx.fillStyle = "#000";
      ctx.font = "bold 20px Helvetica";
      ctx.textAlign = "center";
      ctx.fillText("Training Payment Receipt", canvas.width / 2, 110);

      ctx.textAlign = "left"; // Reset alignment for body

      // Address block (left)
      let yStart = 150;
      ctx.font = "14px Arial";
      ctx.fillText("Kinplus Technologies", 30, yStart);
      ctx.fillText("2nd Floor, Christore Building", 30, yStart + 20);
      ctx.fillText("Opp. Crunchies Restaurant", 30, yStart + 40);
      ctx.fillText("Similoluwa, Ado-Ekiti", 30, yStart + 60);
      ctx.fillText("08116400858, 07075199782", 30, yStart + 80);


      // Payer details (right)
      const rightX = 420;
      const now = new Date();
      ctx.fillText(`Payment Date: ${now.toLocaleDateString()}`, rightX, yStart);
      ctx.fillText(`Payer: ${fullName}`, rightX, yStart + 20);
      ctx.fillText(`Email: ${email}`, rightX, yStart + 40);
      ctx.fillText(`Phone: ${phoneNumber}`, rightX, yStart + 60);
      ctx.fillText(`Training Type: ${availability}`, rightX, yStart + 80);


      // Table Header
      let tableY = yStart + 100;
      ctx.fillStyle = "#dcdcdc";
      ctx.fillRect(30, tableY, 640, 30); // match new width

      ctx.fillStyle = "#000";
      ctx.font = "bold 14px Arial";
      ctx.fillText("Training Track", 40, tableY + 20);
      ctx.fillText("Package", 300, tableY + 20);
      ctx.fillText("Amount (NGN)", 540, tableY + 20);

      // Table Content
      ctx.fillStyle = "#fff";
      ctx.fillRect(30, tableY + 30, 640, 30);

      ctx.fillStyle = "#000";
      ctx.font = "14px Arial";
      ctx.fillText(track, 40, tableY + 50);
      ctx.fillText(safePackageName, 300, tableY + 50);
      ctx.fillText(`${amount.toLocaleString()}`, 540, tableY + 50);

      // Export to PNG
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "kinplus_training_payment_receipt.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, "image/png");
    };

    logo.onerror = () => {
      alert("Failed to load the logo. Please try again.");
    };
  };

  // Hook to handle user's email, track and payment package, and also trackpackage for Paystack.
  const [userEmail, setUserEmail] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [showChoiceModal, setShowChoiceModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [userTrack, setUserTrack] = useState("");
  const [userTrackPackage, setUserTrackPackage] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userAvailabity, setUserAvailabity] = useState("");


  // Hook to pop up amount and payment success modals
  // const [showAmountModal, setShowAmountModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [amountPaid, setAmountPaid] = useState(0); // State to store the amount the user picked in the amount options


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
      setUserTrackPackage(data.trackPackage);
      setUserPhoneNumber(data.phoneNumber);
      setUserAvailabity(data.availability);


      // Setting amount based on selected track
      const amount = data.trackPackage.includes("70,000")
        ? 70000
        : data.trackPackage.includes("100,000")
        ? 100000
        : data.trackPackage.includes("180,000")
        ? 180000
        : data.trackPackage.includes("200,000")
        ? 200000
        : data.trackPackage.includes("250,000")
        ? 250000
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
    { title: "Basic Digital Literacy", value: "Basic Digital Literacy" },

  ];

  const packageOptions = [
    { title: "Standard (3 Months: 200,000)", value: "Standard (3 Months: 200,000)" },
    { title: "Premium (5 Months: 300,000)", value: "Premium (5 Months: 300,000)" },
  ];

  const graphicDesignOptions = [
    { title: "Standard (3 Months: 180,000)", value: "Standard (3 Months: 180,000)" },
    { title: "Premium (5 Months: 250,000)", value: "Premium (5 Months: 250,000)" },
  ];

  const digitalLiteracyOptions = [
    { title: "Standard (1 Month: 70,000)", value: "Standard (1 Month: 70,000)" },
    { title: "Premium (2 Months: 100,000)", value: "Premium (2 Months: 100,000)" },
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

  if (selectedTrack === "Basic Digital Literacy") {
    dynamicPackageOptions = digitalLiteracyOptions;
  } else if (selectedTrack === "Graphic Design") {
    dynamicPackageOptions = graphicDesignOptions;
  }

  // animation variants
  const slideInLeft = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  const slideInRight = {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <>
      <DefaultHelmet
        title="Register for Tech Training | Kinplus Technologies"
        description="Join Kinplus Technologies' training programs to kickstart your career in tech. Learn Web Development, Cybersecurity, Product Design, Data Analysis, and more. Flexible packages and expert instructors available."
        url="https://www.kinplusgroup.com/contact-us/training"
        image="https://www.kinplusgroup.com/kinplus-opengraph-image.png"
      />

      <PageLayout className="overflow-x-hidden flex justify-between flex-col md:flex-row gap-20 lg:py-40 py-32">
        <div
          id="target-section"
          className="grid lg:grid-rows-[350px_80px_auto] grid-rows-[200px_50px_1fr] gap-6 w-full p-2 mt-10 lg:mt-20"
        >
          <motion.div {...slideInLeft}>
            <h3 className="text-[35px] lg:text-[52px] leading-[110.286%] font-bold text-[#082B5B] capitalize max-w-10 mb-8">
              Get Started
            </h3>
            <ul className="text-[#101010] lg:text-[1.3rem] mt-8 text-base grid gap-3 list-inside list-disc marker:text-[#101010]">
              <li>Different Plan Options for you</li>
              <li>Large pool of vetted and proven instructors</li>
              <li>Available Resources to help later on</li>
              <li>Online courses for you to watch anytime</li>
            </ul>
          </motion.div>

          <hr className="h-[4px] bg-white my-12 mr-5" />
          <p className="text-[#101010] lg:text-xl leading-8">
            Looking to partner with us? We'd love to hear from you. Contact us
            using the details below to explore how we can work together. We're
            committed to providing the best possible service, so don't hesitate
            to get in touch.
          </p>
        </div>

        <motion.div
          {...slideInRight}
          className="w-full mt-8 bg-blue-950 rounded-[0.9375rem] text-white mx-auto p-10"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
            <h3 className="text-[2.75rem] leading-[3.375rem] capitalize font-[700] md:w-[10.625em]">
              Register With Us For Training
            </h3>
            <div className="grid sm:grid-flow-row gap-2">
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
                  <p className="text-red-500">{errors.phoneNumber.message}</p>
                )}
              </div>

              <div>
                <Input
                  type="select"
                  name="Religion"
                  placeholder="Select your Religion"
                  options={religionOptions}
                  isSelect={activeDropdown === "religion"}
                  setIsSelect={() => handleDropdownToggle("religion")}
                  error={errors.religion?.message}
                  selected={watch("religion")}
                  setSelected={(value) => {
                    setValue("religion", value, { shouldValidate: true });
                    trigger("religion");
                  }}
                />
                {/* {errors.religion && (
                  <p className="text-red-500">{errors.religion.message}</p>
                )} */}
              </div>

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
        {/* Modal for the user to pick if they want to pay now or later*/}
        <PaymentChoiceModal
          isOpen={showChoiceModal}
          onPayNow={() => {
            setShowChoiceModal(false);

            // Start Paystack payment directly with full amount
            setAmountPaid(paymentAmount); // Save full amount for receipt
            handlePaystackPayment({
              email: userEmail,
              amount: paymentAmount,
              fullName: userName,
              track: userTrack,
            });
          }}
          onPayOnsite={() => {
            setShowChoiceModal(false);
            setIsFormModalOpen(true);
          }}
          onClose={() => setShowChoiceModal(false)}
        />

        {/* Old Modal logic */}
        {/* <PaymentChoiceModal
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
          /> */}

        {/* Modal for the user to pick if they want to pay in full or in instalments*/}
        {/* Unused for now */}
        {/* <PaymentAmountModal
            isOpen={showAmountModal}
            amount={paymentAmount}
            onClose={() => setShowAmountModal(false)}
            onPay={(type) => {
              setShowAmountModal(false);
              const finalAmount =
                type === "60" ? Math.floor(paymentAmount * 0.6) : paymentAmount;
               setAmountPaid(finalAmount);
        
              handlePaystackPayment({
                email: userEmail,
                amount: finalAmount,
                fullName: userName,
                track: userTrack,
              });
            }}
          /> */}

        <PaymentSuccessModal
          isOpen={showSuccessModal}
          onDownloadPDF={() =>
            generatePDFReceipt({
              fullName: userName,
              email: userEmail,
              phoneNumber: userPhoneNumber,
              availability: userAvailabity,
              track: userTrack,
              amount: paymentAmount,
              trackPackage: userTrackPackage,
            })
          }
          onDownloadImage={() =>
            generateImageReceipt({
              fullName: userName,
              email: userEmail,
              phoneNumber: userPhoneNumber,
              availability: userAvailabity,
              track: userTrack,
              amount: paymentAmount,
              trackPackage: userTrackPackage,
            })
          }
          onClose={() => setShowSuccessModal(false)}
        />

        <FormModal
          isOpen={isFormModalOpen}
          onClose={() => setIsFormModalOpen(false)}
          message="Thank you for registering! You have chosen to pay onsite. Please complete your payment at our office: Kinplus Technologies, 2nd Floor, Christore Building, Opp. Crunchies Restaurant, Similoluwa, Ado Ekiti, Ekiti State, Nigeria. We are open from Monday - Friday, 9AM - 5PM. We look forward to seeing you!"
        />
      </PageLayout>
    </>
  );
}
