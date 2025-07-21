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
import { handlePaystackPayment } from "../../services/handlePaystackPayment.js";
import PaymentChoiceModal from "../../components/modals/PaymentChoiceModal.jsx";
// import PaymentAmountModal from "../../components/modals/PaymentAmountModal.jsx";
import PaymentSuccessModal from "../../components/modals/PaymentSuccessModal.jsx";
import PaymentPreferenceModal from "../../components/modals/PaymentPreference.jsx";
import BankTransferModal from "../../components/modals/BankTransferModal.jsx";
import { generatePDFReceipt, generateImageReceipt } from "../../repository/receipt.js";
import { trackOptions, packageOptions, graphicDesignOptions, computerOperationOptions, genderInput, religionOptions, allMonths, PROMO_DETAILS } from './../../repository/training-options';

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
        promoStatus ?? "null"
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

  const selectedTrack = watch("track");

  let dynamicPackageOptions = packageOptions;

  if (selectedTrack === "Basic Computer Operation") {
    dynamicPackageOptions = computerOperationOptions;
  } else if (selectedTrack === "Graphic Design") {
    dynamicPackageOptions = graphicDesignOptions;
  }

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
                  
                  {/*<div>
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
                  </div> */}
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
                onSuccess: () => setShowSuccessModal(true),
                onClose: () => alert("Payment window closed."),
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
