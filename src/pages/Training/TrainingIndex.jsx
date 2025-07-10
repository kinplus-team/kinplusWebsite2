import React, { useState, useEffect, useRef } from "react";
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
// import PaymentAmountModal from "../../components/modals/PaymentAmountModal.jsx";
import PaymentSuccessModal from "../../components/modals/PaymentSuccessModal.jsx";
import PaymentPreferenceModal from "../../components/modals/PaymentPreference.jsx";
import BankTransferModal from "../../components/modals/BankTransferModal.jsx";
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
  chooseYourCohort: z.string().min(1, "You have to choose the cohort you want to join"),
  promoCode: z.string().optional().or(z.literal("")),

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

  const promoCodeValue = watch("promoCode");


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
    doc.text("07075199782, 08116400858", 15, yStart + 24);

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
      ctx.fillText("07075199782, 08116400858", 30, yStart + 80);

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

  // Hook to pop up amount payment success, payment preference, and bank transfer modals
  // const [showAmountModal, setShowAmountModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showPaymentPrefModal, setShowPaymentPrefModal] = useState(false);
  const [showBankModal, setShowBankModal] = useState(false);

  const [amountPaid, setAmountPaid] = useState(0); // State to store the amount the user picked in the amount options

  // Hook to handle if the promo code is valid or not and to also check the discount based on the day of input.
  // const [promoCode, setPromoCode] = useState("");
  const [promoStatus, setPromoStatus] = useState(null); // null | "valid" | "invalid" | "expired"
  const [discountRate, setDiscountRate] = useState(0);
  const [fullAmount, setFullAmount] = useState(0);
  const [discountedAmount, setDiscountedAmount] = useState(0);

  // useRef
  const promoStatusRef = useRef(promoStatus);
  const fullAmountRef = useRef(fullAmount);
  const discountedAmountRef = useRef(discountedAmount);


  // Frontend promo code logic
  const PROMO_DETAILS = {
    code: "KPL2289@", // The code the user must enter
    startDate: new Date("2025-07-10"), // When the code became valid
    discount: 0.05, // 5% discount
    durationDays: 7, // Valid for 7 days
  };

  // useEffect hook for real-time promo code validation
    useEffect(() => {
      const timeout = setTimeout(() => {
        const code = promoCodeValue?.trim()?.toUpperCase();
        const now = new Date();
  
        if (!code || code.length < 3) {
          setPromoStatus(null);
          setDiscountRate(0);
          return;
        }
  
        const promoStart = PROMO_DETAILS.startDate;
        const promoEnd = new Date(promoStart);
        promoEnd.setDate(promoStart.getDate() + PROMO_DETAILS.durationDays);
  
        if (code === PROMO_DETAILS.code.toUpperCase()) {
          if (now >= promoStart && now <= promoEnd) {
            setPromoStatus("valid");
            setDiscountRate(PROMO_DETAILS.discount);
          } else if (now > promoEnd) {
            setPromoStatus("expired");
            setDiscountRate(0);
          } else {
            setPromoStatus("invalid");
            setDiscountRate(0);
          }
        } else {
          setPromoStatus("invalid");
          setDiscountRate(0);
        }
      }, 600); // debounce
  
      return () => clearTimeout(timeout);
    }, [promoCodeValue]);
  

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
        data.availability,
        data.chooseYourCohort,
        // data.promoCode,
        promoStatus ?? "null",
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

      // logic to successfully pass the discount to the bank transfer modal
      const enteredPromo = data.promoCode?.trim()?.toUpperCase();
      const promoStart = PROMO_DETAILS.startDate;
      const promoEnd = new Date(promoStart);
      promoEnd.setDate(promoStart.getDate() + PROMO_DETAILS.durationDays);
      const now = new Date();

      let isPromoValid = false;
      let promoDiscount = 0;

      if (
        enteredPromo === PROMO_DETAILS.code.toUpperCase() &&
        now >= promoStart &&
        now <= promoEnd
      ) {
        isPromoValid = true;
        promoDiscount = PROMO_DETAILS.discount;
      }

      const finalAmount = isPromoValid
        ? Math.floor(amount * (1 - promoDiscount))
        : amount;

      setPromoStatus(isPromoValid ? "valid" : "invalid");
      console.log("isPromoValid", isPromoValid);
      console.log("Promo Status:", isPromoValid ? "valid" : "invalid");
      setPromoStatus(isPromoValid ? "valid" : "invalid");
      promoStatusRef.current = isPromoValid ? "valid" : "invalid";

      setDiscountRate(promoDiscount);
      setFullAmount(amount);
      setFullAmount(amount);
      fullAmountRef.current = amount;

      setDiscountedAmount(finalAmount);
      setDiscountedAmount(finalAmount);
      discountedAmountRef.current = finalAmount;

      setPaymentAmount(finalAmount); // This will trigger correct amount for Paystack
      setTimeout(() => {
        setShowChoiceModal(true);
      }, 50); // A little delay so the state can pass to the BankTransfer modal  

      
    } catch (error) {
      console.log("From client:", error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setPromoStatus(null);
    setDiscountedAmount(0);
    setFullAmount(0);
  };

  const trackOptions = [
    { title: "Web Development", value: "Web Development" },
    { title: "Cybersecurity", value: "Cybersecurity" },
    { title: "Product Design", value: "Product Design" },
    { title: "Graphic Design", value: "Graphic Design" },
    { title: "Data Analysis", value: "Data Analysis" },
    { title: "Digital Marketing", value: "Digital Marketing" },
    { title: "Basic Computer Operation", value: "Basic Computer Operation" },
    { title: "AI/Machine Learning", value: "AI/Machine Learning" },
  ];

  const packageOptions = [
    {
      title: "Standard (3 Months: 200,000)",
      value: "Standard (3 Months: 200,000)",
    },
    {
      title: "Premium (5 Months: 300,000)",
      value: "Premium (5 Months: 300,000)",
    },
  ];

  const graphicDesignOptions = [
    {
      title: "Standard (3 Months: 180,000)",
      value: "Standard (3 Months: 180,000)",
    },
    {
      title: "Premium (5 Months: 250,000)",
      value: "Premium (5 Months: 250,000)",
    },
  ];

  const computerOperationOptions = [
    {
      title: "Standard (1 Month: 70,000)",
      value: "Standard (1 Month: 70,000)",
    },
    {
      title: "Premium (2 Months: 100,000)",
      value: "Premium (2 Months: 100,000)",
    },
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

  if (selectedTrack === "Basic Computer Operation") {
    dynamicPackageOptions = computerOperationOptions;
  } else if (selectedTrack === "Graphic Design") {
    dynamicPackageOptions = graphicDesignOptions;
  }

  // Month Options
  const allMonths = [
    { title: "January", value: "January" },
    { title: "February", value: "February" },
    { title: "March", value: "March" },
    { title: "April", value: "April" },
    { title: "May", value: "May" },
    { title: "June", value: "June" },
    { title: "July", value: "July" },
    { title: "August", value: "August" },
    { title: "September", value: "September" },
    { title: "October", value: "October" },
    { title: "November", value: "November" },
    { title: "December", value: "December" },
  ];

  const currentMonthIndex = new Date().getMonth();

  const cohortOptions = allMonths.slice(currentMonthIndex);

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

                  <div>
                    <Input
                      type="select"
                      name="chooseYourCohort"
                      placeholder="Select your preferred cohort month"
                      options={cohortOptions}
                      isSelect={activeDropdown === "chooseYourCohort"}
                      setIsSelect={() =>
                        handleDropdownToggle("chooseYourCohort")
                      }
                      error={errors.chooseYourCohort?.message}
                      selected={watch("chooseYourCohort")}
                      setSelected={(value) =>
                        setValue("chooseYourCohort", value)
                      }
                    />
                  </div>
                </div>

                {/* Group 6 */}
                <div className="grid gap-3 sm:grid-cols-2 lg:items-start">
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
                      onCheck={() =>
                        setValue("availability", "Onsite/Physical")
                      }
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

                  {/* Promo code */}
                  <div>
                    <Input
                      type="text"
                      name="Promo Code"
                      placeholder="Enter Promo Code (if any)"
                      {...register("promoCode")}
                    />
                    {promoStatus === "valid" && (
                      <p className="text-green-500 mt-1">
                        ✅ {discountRate * 100}% discount applied!
                      </p>
                    )}
                    {promoStatus === "invalid" && (
                      <p className="text-red-500 mt-1">
                        ❌ Invalid promo code.
                      </p>
                    )}
                    {promoStatus === "expired" && (
                      <p className="text-yellow-500 mt-1">
                        ⚠️ Promo code has expired.
                      </p>
                    )}
                  </div>
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
            // New logic that opens a payment preference modal where the user can choose to pay via Paystack or bank transfer
            onPayNow={() => {
              setShowChoiceModal(false);
              setShowPaymentPrefModal(true);
            }}
            onPayOnsite={() => {
              setShowChoiceModal(false);
              setIsFormModalOpen(true);
            }}
            onClose={() => setShowChoiceModal(false)}
          />

          <PaymentPreferenceModal
            isOpen={showPaymentPrefModal}
            onPaystack={() => {
              setShowPaymentPrefModal(false);
              setAmountPaid(paymentAmount);
              handlePaystackPayment({
                email: userEmail,
                amount: paymentAmount,
                fullName: userName,
                track: userTrack,
              });
            }}
            onBankTransfer={() => {
              setShowPaymentPrefModal(false);
              setTimeout(() => {
                console.log("Triggering BankTransferModal with:", {
                  promoStatus: promoStatusRef.current,
                  fullAmount: fullAmountRef.current,
                  discountedAmount: discountedAmountRef.current,
                });
                setShowBankModal(true);
              }, 100);
            }}
            onClose={() => setShowPaymentPrefModal(false)}
          />

          {console.log("Passing to BankTransferModal =>", {
            promoStatus,
            fullAmount,
            discountedAmount,
          })}

          <BankTransferModal
            isOpen={showBankModal}
            onClose={() => setShowBankModal(false)}
            onBack={() => {
              console.log("Going back to Payment Preference Modal");
              setShowBankModal(false);
              setShowPaymentPrefModal(true); // This will bring back PaymentPreferenceModal
            }}
            promoStatus={promoStatusRef.current}
            fullAmount={fullAmountRef.current}
            discountedAmount={discountedAmountRef.current}
          />

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
            onClose={handleCloseSuccessModal}
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
