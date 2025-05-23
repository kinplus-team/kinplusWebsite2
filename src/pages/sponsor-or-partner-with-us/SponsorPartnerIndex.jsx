import { toast } from "react-toastify";
import { PartnerOrSponsorUs } from "../../services/partnerOrSponsorUs";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { useState } from "react";
import Text from "../../components/Text";
import Input from "../../components/Inputs";
import DefaultHelmet from "../../components/DefaultHelmet";

export default function ContactUsServices() {
 
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
  const [isLoading, setIsLoading] = useState(false)

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
        toast.error("Something went wrong!");
        setIsLoading(false);
      });
  };

  return (
    <>
      {/* Default Helmet for SEO */}
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
        {/* Services Form */}
        <div className="lg:w-[800px] w-full mx-auto bg-blue-950 rounded-[0.9375rem] text-white">
          <form
            key={formKey}
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mt-8 w-full lg:p-14 p-7"
          >
            <Text
              type="heading"
              className="capitalize"
            >
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
                name="Amount"
                placeholder="Enter the amount (Optional)"
                isRequired={false}
                setInput={setAmount}
              />
              {errors.amount && (
                <p className="text-red-500">{errors.phoneNumber}</p>
              )}
            </div>

            <div>
              <Input
                type="number"
                name="Phone Number"
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
                name="Current address"
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
                name="Organization name"
                placeholder="Enter your organization name (Optional)"
                isRequired={false}
                setInput={setOrganizationName}
              />
              {errors.organizationName && (
                <p className="text-red-500">{errors.companyName}</p>
              )}
            </div>

            <div>
              <Input
                type="text"
                name="Organization address"
                placeholder="Enter your organization address (Optional)"
                isRequired={false}
                setInput={setOrganizationAddress}
              />
              {errors.organizationAddress && (
                <p className="text-red-500">{errors.companyName}</p>
              )}
            </div>

            <div>
              <Input
                type="text"
                name="Organization website"
                placeholder="Enter your organization website (Optional)"
                isRequired={false}
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
                <li>Placement or Monetary</li>
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
    </>
  );
}
