import axios from "axios";

import { toast } from "react-toastify";
import { PartnerOrSponsorUs } from "../../services/partnerOrSponsorUs";

import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { useState } from "react";
import Text from "../../components/Text";
import Input from "../../components/Inputs";

export default function ContactUsServices() {
  const [isLoading, setIsLoading] = useState(false);
  //   const navigate = useNavigate();

  const [formKey, setFormKey] = useState(0);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");

  const [organizationName, setOrganizationName] = useState("");
  const [organizationAddress, setOrganizationAddress] = useState("");

  const [organizationWebsite, setOrganizationWebsite] = useState("");

  const [partnershipType, setPartnershipType] = useState("");

  const [comment, setComment] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    setValue,
  } = useForm({ mode: "all" });

  const [errors, setErrors] = useState({});

  const onSubmit = async (data) => {
    setIsLoading(true);
    await PartnerOrSponsorUs(
      fullName,
      email,
      amount,
      phoneNumber,
      currentAddress,
      organizationName,
      organizationAddress,
      organizationWebsite,
      partnershipType,
      comment
    )
      .then(() => {
        toast.success("Form submitted successfully");
        setIsLoading(false);
        setFormKey(formKey + 1);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong!");
        setIsLoading(false);
      });
  };

  return (
    <section
      id="target-section"
      className="grid content-center gap-10 lg:py-40 pt-32 pb-16 bg-[#f1f3f9]"
    >
      {/* Services Form */}
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
              name="Full name"
              placeholder="Enter your Full Name"
              setInput={setFullName}
            />
            {errors.fullName && (
              <p className="text-red-500">{errors.fullName}</p>
            )}
          </div>

          <div>
            <Input
              type="email"
              name="E-Mail"
              placeholder="Enter your E-Mail"
              setInput={setEmail}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div>
            <Input
              type="text"
              name="amount"
              placeholder="Enter the amount (Optional)"
              isRequired={"not required"}
              setInput={setAmount}
            />
            {errors.amount && (
              <p className="text-red-500">{errors.phoneNumber}</p>
            )}
          </div>

          <div>
            <Input
              type="number"
              name="phone Number"
              placeholder="Enter your phone number"
              setInput={setPhoneNumber}
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.companyName}</p>
            )}
          </div>

          <div>
            <Input
              type="text"
              name="current address"
              placeholder="Enter your current address"
              setInput={setCurrentAddress}
            />
            {errors.currentAddress && (
              <p className="text-red-500">{errors.companyName}</p>
            )}
          </div>

          <div>
            <Input
              type="text"
              name="organization name"
              placeholder="Enter your organization name (Optional)"
              isRequired={"not required"}
              setInput={setOrganizationName}
            />
            {errors.organizationName && (
              <p className="text-red-500">{errors.companyName}</p>
            )}
          </div>

          <div>
            <Input
              type="text"
              name="organization address"
              placeholder="Enter your organization address (Optional)"
              isRequired={"not required"}
              setInput={setOrganizationAddress}
            />
            {errors.organizationAddress && (
              <p className="text-red-500">{errors.companyName}</p>
            )}
          </div>

          <div>
            <Input
              type="text"
              name="organization website"
              placeholder="Enter your organization website (Optional)"
              isRequired={"not required"}
              setInput={setOrganizationWebsite}
            />
            {errors.organizationWebsite && (
              <p className="text-red-500">{errors.companyName}</p>
            )}
          </div>

          <div>
            <Input
              type="text"
              name="Partnership Type (placement or monetary)"
              placeholder="Placement or Partnership"
              setInput={setPartnershipType}
            />

            <ul className="list-disc px-5 text-gray-300 text-sm">
              <li>Permanent ("Sponsor a training and internship program")</li>
              <li>Monetary: "Donate a specific amount"</li>
            </ul>
            {errors.organizationWebsite && (
              <p className="text-red-500">{errors.companyName}</p>
            )}
          </div>

          {/* if yes describe your health challenges */}
          <div>
            <Input
              type="textarea"
              name="Comment"
              setInput={setComment}
              isTextAreaRequired={false}
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
  );
}
