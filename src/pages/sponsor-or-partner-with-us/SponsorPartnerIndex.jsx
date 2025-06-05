import { toast } from "react-toastify";
import { PartnerOrSponsorUs } from "../../services/partnerOrSponsorUs";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Text from "../../components/Text";
import Input from "../../components/Inputs";
import DefaultHelmet from "../../components/DefaultHelmet";
import { useState, useEffect } from "react";

export default function ContactUsServices() {
  const [formKey, setFormKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const partnershipOptions = [
    { title: "Placement (Sponsor the training and internship program of a number of beneficiaries)", value: "Placement" },
    { title: "Monetary (Donate an amount to support a training program)", value: "Monetary" },
  ];

  const [activeDropdown, setActiveDropdown] = useState("");
  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? "" : dropdownName));
  };

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm({ mode: "all" });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await PartnerOrSponsorUs(
        data.fullName,
        data.email,
        data.amount,
        data.phoneNumber,
        data.currentAddress,
        data.organizationName,
        data.organizationAddress,
        data.organizationWebsite,
        data.partnershipType,
        data.comment
      );
      toast.success("Form submitted successfully");
      setFormKey((prev) => prev + 1);
      reset();
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    register("partnershipType", {
      required: "Please select partnership type",
    });
  }, [register]);

  return (
    <>
      <DefaultHelmet
        title="Partner with Us | Kinplus Technologies"
        description="Looking to partner with Kinplus Technologies? Learn more about our collaboration opportunities and how we can help drive innovation together."
        url="https://www.kinplusgroup.com/contact-us/services"
        image="https://www.kinplusgroup.com/kinplus-opengraph-image.png"
      />

      <section
        id="target-section"
        className="grid content-center gap-10 lg:py-40 pt-32 pb-16 bg-[#f1f3f9]"
      >
        <div className="lg:w-[800px] w-full mx-auto bg-blue-950 rounded-[0.9375rem] text-white">
          <form
            key={formKey}
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mt-8 w-full lg:p-14 p-7"
          >
            <Text type="heading" className="capitalize">
              partner with us
            </Text>

            <div>
              <Input
                type="text"
                name="fullName"
                placeholder="Enter your Full Name"
                {...register("fullName", { required: "Full Name is required" })}
              />
              {errors.fullName && (
                <p className="text-red-500">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <Input
                type="email"
                name="email"
                placeholder="Enter your E-Mail"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Input
                type="text"
                name="amount"
                placeholder="Enter the amount"
                {...register("amount", {
                  required: "Amount is required",
                })}
              />
              {errors.amount && (
                <p className="text-red-500">{errors.amount.message}</p>
              )}
            </div>

            <div>
              <Input
                type="text"
                name="phoneNumber"
                placeholder="Enter your phone number"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                })}
              />
              {errors.phoneNumber && (
                <p className="text-red-500">{errors.phoneNumber.message}</p>
              )}
            </div>

            <div>
              <Input
                type="text"
                name="currentAddress"
                placeholder="Enter your current address"
                {...register("currentAddress", {
                  required: "Current address is required",
                })}
              />
              {errors.currentAddress && (
                <p className="text-red-500">{errors.currentAddress.message}</p>
              )}
            </div>

            <div>
              <Input
                type="text"
                name="organizationName"
                placeholder="Enter your organization name (Optional)"
                {...register("organizationName")}
              />
            </div>

            <div>
              <Input
                type="text"
                name="organizationAddress"
                placeholder="Enter your organization address (Optional)"
                {...register("organizationAddress")}
              />
            </div>

            <div>
              <Input
                type="text"
                name="organizationWebsite"
                placeholder="Enter your organization website (Optional)"
                {...register("organizationWebsite")}
              />
            </div>

            <div>
              <Input
                type="select"
                name="partnershipType"
                placeholder="Select partnership type"
                options={partnershipOptions}
                isSelect={activeDropdown === "partnershipType"}
                setIsSelect={() => handleDropdownToggle("partnershipType")}
                error={errors.partnershipType?.message}
                selected={watch("partnershipType")}
                setSelected={(value) => {
                  setValue("partnershipType", value, { shouldValidate: true });
                  trigger("partnershipType");
                }}
              />
              {/* {errors.partnershipType && (
                <p className="text-red-500">{errors.partnershipType.message}</p>
              )} */}
            </div>

            <div>
              <Input
                type="textarea"
                name="comment"
                placeholder="Enter any additional comment"
                {...register("comment")}
              />
            </div>

            <div className="text-center mt-[10px] py-9 w-40 mx-auto">
              <Button
                text="Submit"
                type="customizedWhite"
                isLoading={isLoading}
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
