import { useState } from "react";
import Input from "../../../components/Inputs";
import PageLayout from "../../../components/Layout/PageLayout";

export default function ApplyForInternship() {
  const [genderSelect, setGenderSelect] = useState("");
  const gender = [{ title: "Male" }, { title: "Female" }];
  const questions = ["Yes", "No"];

  return (
    <PageLayout>
      <div
        className="grid lg:grid-cols-2 gap-8 lg:py-[55px] py-[30px]"
        style={{ borderTop: "1px solid rgba(0, 0, 0, 0.42) " }}
      >
        {/* left side bar */}
        <div className="grid lg:grid-rows-[240px_160px_25px_150px] gap-6 place-items-start">
          <h4 className="flex items-center text-[#082B5B] lg:text-[52px] text-[35px] lg:leading-[60px] leading-[40px] font-[700] max-w-lg ">
            We are looking forward to meeting you
          </h4>

          <p className="text-lg">
            We're thrilled to welcome you to our team! We're looking forward to
            getting to know you, learning about your unique perspective, and
            sharing our expertise with you. We believe that you have the
            potential to make a positive impact in the tech industry, and we're
            excited to be a part of your journey. Get ready to learn, grow, and
            have fun with us
          </p>

          <div className="bg-[#fff] h-[3px] w-full"></div>

          <p className="text-lg">
            During your industrial training at Kinplus, you'll be immersed in a
            dynamic and fast-paced environment. You'll work on real-world
            projects, collaborate with our team, and gain hands-on experience in
            the tech industry. It's a great opportunity to explore your
            interests and gain valuable skills for your future career. Are you
            ready to get started?
          </p>
        </div>

        {/* right side bar */}
        <div className="bg-[#082B5B] lg:p-14 p-6 rounded-lg">
          <h3 className="lg:text-[44px] text-[35px] font-[700] text-[#F1F1F1] lg:leading-[54px] leading-[40px] max-w-md">
            Apply for our SIWES/IT program
          </h3>
          <div className="grid sm:grid-flow-row gap-2">
            <Input
              type="text"
              name="Full Name"
              placeholder="Enter your Full Name"
            />

            <Input type="email" name="E-Mail" placeholder="Enter your E-Mail" />
            <Input
              type="phone"
              name="Phone Number"
              placeholder="Enter your Phone Number"
            />
            <Input
              type="text"
              name="Religion"
              placeholder="Enter your Religion"
            />

            {/* Date of birth and gender */}
            <div className="grid gap-3 grid-cols-2 items-center">
              <Input
                type="date"
                name="Date of Birth"
                placeholder="Date of Birth"
              />
              <Input
                type="select"
                name="Gender"
                placeholder="Gender"
                selected={genderSelect}
                setSelected={setGenderSelect}
                options={gender}
              />
            </div>

            <Input
              type="text"
              name="Address"
              placeholder="Enter your Address"
            />

            <Input
              type="text"
              name="Name of Institution"
              placeholder="Enter the Name of your School"
            />

            <Input
              type="text"
              name="Course of Study"
              placeholder="Tell us what you are studying"
            />

            <Input
              type="text"
              name="Duration"
              placeholder="How many months are you using?"
            />

            <div className="grid gap-3 grid-cols-2 items-center">
              <Input
                type="date"
                name="Start Date"
                placeholder="When are you starting?"
              />
              <Input
                type="date"
                name="End Date"
                placeholder="When are you likely to finish?"
              />
            </div>

            {/* health chanllenges */}
            <div className="py-3">
              <p className="text-xl text-white">
                Do you have any health chanllenges
              </p>
              <Input
                type="checkbox"
                name="Dou you have any health challenge?"
                placeholder="Dou you have any health challenge?"
                radioText="Yes"
              />
              <Input
                type="checkbox"
                name="Dou you have any health challenge?"
                placeholder="Dou you have any health challenge?"
                radioText="No"
              />
            </div>

            {/* if yes describe your health challenges */}
            <Input
              type="textarea"
              name="If yes describe your health Challenge"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
