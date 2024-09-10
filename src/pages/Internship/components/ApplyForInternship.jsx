import { useState } from "react";
import Input from "../../../components/Inputs";
import PageLayout from "../../../components/Layout/PageLayout";
import Button from "../../../components/Button";
import { ApplyForSIWES } from "../../../services/internshipServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Text from "../../../components/Text";
import { Element } from "react-scroll";

export default function ApplyForInternship() {
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const genderInput = [{ title: "Male" }, { title: "Female" }];
  const [ activeDropdown, setActiveDropdown] = useState(null)
  const handleDropdownToggle = (dropdownName) => {
    // If the clicked dropdown is already open, close it; otherwise, open it
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [religion, setReligion] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const [formKey, setFormKey] = useState(0);

  const [address, setAddress] = useState("");
  const [nameOfInstitution, setNameOfInstitution] = useState("");
  const [courseOfStudy, setCourseOfStudy] = useState("");
  const [duration, setDuration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [anyHealthChallenges, setAnyHealthChallenges] = useState("");
  const [descriptionOfHealthChallenges, setDescriptionOfHealthChallenges] =
    useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [errors, setErrors] = useState({});

  const uploadInternshipApplication = () => {
    setIsLoading(true);
    setTimeout(() => {
      ApplyForSIWES(
        fullName,
        email,
        phoneNumber,
        religion,
        dateOfBirth,
        gender.title,
        address,
        nameOfInstitution,
        courseOfStudy,
        duration,
        startDate,
        endDate,
        anyHealthChallenges,
        descriptionOfHealthChallenges
      )
        .then((response) => {
          toast.success("Thank you for reaching out to us");
          setIsLoading(false);

          setFullName("");
          setEmail("");
          setPhoneNumber("");
          setReligion("");
          setDateOfBirth("");
          setAddress("");
          setNameOfInstitution("");
          setGender("");
          setCourseOfStudy("");
          setDuration("");
          setStartDate("");
          setEndDate("");
          setAnyHealthChallenges("");
          setDescriptionOfHealthChallenges("");

          setFormKey(formKey + 1);
        })
        .catch((error) => {
          toast.error(error.response.errors[0].message);
          setIsLoading(false);
        });
    }, 3000);
  };

  return (
    <PageLayout>
      <Element
        name="internship-application-form"
        className="grid lg:grid-cols-2 gap-8 lg:py-[55px] py-[30px]"
        style={{ borderTop: "1px solid rgba(0, 0, 0, 0.42) " }}
      >
        {/* left side bar */}
        <div className="grid lg:grid-rows-[240px_160px_25px_150px] gap-6 place-items-start mt-4 md:mt-8 lg:mt-16">
          <div className="text-[#082B5B] text-[2.188em] sm:text-[2.5em] md:text-[2.75em] lg:text-[3.25em] font-bold leading-[40px] md:leading-[114.286%] lg:leading-[62px] max-w-lg capitalize">
            We are looking forward to meeting you
          </div>

          <Text type="paragraph" className="text-[#101010] sm:mt-4 md:mt-6 lg:mt-0 lg:w-[90%] lg:pb-6">
            We're thrilled to welcome you to our team! We're looking forward to
            getting to know you, learning about your unique perspective, and
            sharing our expertise with you. We believe that you have the
            potential to make a positive impact in the tech industry, and we're
            excited to be a part of your journey. Get ready to learn, grow, and
            have fun with us.
          </Text>

          <div className="bg-[#fff] h-[3px] w-full sm:my-6 md:my-8 lg:my-12"></div>

          <Text type="paragraph" className="text-[#101010] lg:w-[90%] sm:mt-4 md:mt-2 lg:mt-12">
            During your industrial training at Kinplus, you'll be immersed in a
            dynamic and fast-paced environment. You'll work on real-world
            projects, collaborate with our team, and gain hands-on experience in
            the tech industry. It's a great opportunity to explore your
            interests and gain valuable skills for your future career. Are you
            ready to get started?
          </Text>
        </div>

        {/* right side bar */}
        <div className="bg-[#082B5B] lg:p-14 p-6 rounded-lg lg:mt-4">
          <h3 className="lg:text-[44px] text-[35px] font-[700] text-[#F1F1F1] lg:leading-[54px] leading-[40px] max-w-md ">
            Apply for our SIWES/IT program
          </h3>
          <div key={formKey} className="grid sm:grid-flow-row gap-2 mt-4 sm:mt-5 md:mt-6 lg:mt-8">
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                uploadInternshipApplication();
              }}
            >
              <div>
                <Input
                  type="text"
                  name="Full Name"
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
                  type="phone"
                  name="Phone Number"
                  placeholder="Enter your Phone Number"
                  setInput={setPhoneNumber}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500">{errors.phoneNumber}</p>
                )}
              </div>

              <div>
                <Input
                  type="text"
                  name="Religion"
                  placeholder="Enter your Religion"
                  setInput={setReligion}
                />
                {errors.religion && (
                  <p className="text-red-500">{errors.religion}</p>
                )}
              </div>

              {/* Date of birth and gender */}
              <div className="grid gap-3 sm:grid-cols-2 items-center">
                <Input
                  type="date"
                  name="Date of Birth"
                  placeholder="Date of Birth"
                  setInput={setDateOfBirth}
                />
                <Input
                  onClick={() => setStateType("Gender")}
                  type="select"
                  name="Gender"
                  placeholder="Gender"
                  selected={gender}
                  setSelected={setGender}
                  options={genderInput}
                  isSelect={activeDropdown === 'gender'}
                  setIsSelect={() => handleDropdownToggle('gender')}
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="Address"
                  placeholder="Enter your Address"
                  setInput={setAddress}
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="Name of Institution"
                  placeholder="Enter the Name of your School"
                  setInput={setNameOfInstitution}
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="Course of Study"
                  placeholder="Tell us what you are studying"
                  setInput={setCourseOfStudy}
                />
              </div>

              <div>
                <Input
                  type="text"
                  name="How long is your IT/SIWES?"
                  placeholder="How many months are you using?"
                  setInput={setDuration}
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2 items-center">
                <Input
                  type="date"
                  name="Start Date"
                  placeholder="When are you starting?"
                  setInput={setStartDate}
                />
                <Input
                  type="date"
                  name="End Date"
                  placeholder="When are you likely to finish?"
                  setInput={setEndDate}
                />
              </div>

              {/* health challenges */}
              <div className="py-3">
                <p className="text-xl text-white">
                  Do you have any health challenges
                </p>
                <div onClick={() => setAnyHealthChallenges("Yes")}>
                  <Input
                    type="checkbox"
                    name="Do you have any health challenge?"
                    placeholder="Do you have any health challenge?"
                    radioText="Yes"
                    isChecked={anyHealthChallenges === "Yes"}
                    onCheck={() => setAnyHealthChallenges("Yes")}
                  />
                </div>

                <div onClick={() => setAnyHealthChallenges("No")}>
                  <Input
                    type="checkbox"
                    name="Do you have any health challenge?"
                    placeholder="Do you have any health challenge?"
                    radioText="No"
                    isChecked={anyHealthChallenges === "No"}
                    onCheck={() => setAnyHealthChallenges("No")}
                  />
                </div>
              </div>

              {/* if yes describe your health challenges */}
              <div>
                <Input
                  type="textarea"
                  name="If yes describe your health Challenge"
                  setInput={setDescriptionOfHealthChallenges}
                  isTextAreaRequired={
                    anyHealthChallenges == "Yes" ? true : false
                  }
                />
              </div>

              <div className="w-40 mx-auto">
                <Button
                  type="customizedWhite"
                  text="Submit"
                  isLoading={isLoading}
                />
              </div>
            </form>
          </div>
        </div>
      </Element>
    </PageLayout>
  );
}
