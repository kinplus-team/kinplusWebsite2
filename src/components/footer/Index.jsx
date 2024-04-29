import { Link } from "react-router-dom";
import Button from "../Button";
import footerBg2 from "../../assets/footer/footer-bg-2.png";
import kinplusLogoBlue from "../../assets/kinplusBlue.png";
import facebook from "../../assets/svg/social-media-icons/facebook.svg";
import instagram from "../../assets/svg/social-media-icons/instagram.svg";
import linkedIn from "../../assets/svg/social-media-icons/linkedin.svg";
import x from "../../assets/svg/social-media-icons/x.svg";

export default function Footer() {
  const contactDetails = [
    { type: "Email", value: "help@kinplusgroup.com" },
    { type: "Phone", value: "+2347069718643, +2348071572767" },
  ];

  const quickLinks = ["Home", "About us", "Service", "Training", "Blog"];
  const resources = ["Workshop", "Events", "Careers"];
  const socialMediaIcons = [
    {
      icon: facebook,
      link: "https://web.facebook.com/kinplustechnologies/?_rdc=1&_rdr",
    },
    {
      icon: linkedIn,
      link: "https://www.linkedin.com/company/kinplustechnologies/",
    },
    {
      icon: instagram,
      link: "https://www.instagram.com/kinplustechnologies/",
    },
    { icon: x, link: "https://twitter.com/kinplustech" },
  ];

  return (
    <div>
      {/* top section */}
      <div className="bg-[#1C1D20] text-white grid lg:grid-cols-[auto_1fr] gap-5 py-10 lg:px-[150px] px-7 mx-auto">
        <div className="grid lg:gap-10 gap-6">
          <h3 className="lg:text-7xl text-4xl font-bold lg:leading-[80px] lg:text-left text-center lg:max-w-4xl">
            Join our <span className="text-[#1877F9]">leading</span> learning
            programs today
          </h3>
          <p className="lg:text-[24px] text-xl leading-[32px] lg:text-left text-center lg:max-w-2xl max-w-80 mx-auto lg:mx-0 ">
            Start learning by registering or reaching out to us
          </p>
        </div>

        <div className="w-[10em] place-self-center">
          <Button type="customizedWhite" text="Talk to us" />
        </div>
      </div>

      {/* bottom section */}
      <div
        className="w-full "
        style={{
          backgroundImage: `url(${footerBg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="py-10 lg:px-[110px] px-7">
          <div className="grid lg:grid-cols-3 text-white lg:gap-5 gap-8 lg:pb-16">
            {/* contact  */}
            <div className="">
              <Link to={"/"}>
                <img
                  src={kinplusLogoBlue}
                  alt="kinplus-logo"
                  className="w-[150px] h-[42.02px] mb-[30px]"
                />
              </Link>

              <div>
                {contactDetails.map((contactDetail, i) => (
                  <p key={i} className={`lg:text-lg`}>
                    {contactDetail.type}: {contactDetail.value}
                  </p>
                ))}
              </div>
            </div>

            {/* quick links*/}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-[#1877F9] mb-5 lg:text-lg font-bold">
                  {" "}
                  Quick links
                </p>
                {quickLinks.map((quickLink, i) => (
                  <p key={i} className="text-[#E9D7FE] lg:text-lg my-[5px]">
                    {quickLink}
                  </p>
                ))}
              </div>

              {/* resources */}
              <div>
                <p className="text-[#1877F9] mb-5 lg:text-lg font-bold">
                  Resources
                </p>
                {resources.map((resource, i) => (
                  <p key={i} className="text-[#E9D7FE] lg:text-lg my-[5px]">
                    {resource}
                  </p>
                ))}
              </div>
            </div>

            {/* address and social media links */}
            <div>
              <p className="lg:text-[18px] lg:leading-[35px] leading-[24px]">
                Top Floor, 68B Christore Building,Opp. Crunchies
                Restaurant,Similoluwa, Ado Ekiti, Ekiti State, Nigeria.
              </p>

              <div className="flex gap-6 my-3">
                {socialMediaIcons.map((socialMediaIcon, i) => (
                  <Link to={socialMediaIcon.link} key={i}>
                    <img
                      src={socialMediaIcon.icon}
                      alt="social media icon"
                      className="w-9 h-9"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="h-[0.5px] w-full bg-white lg:mt-8 mt-4 mb-6"></div>
          <p className="text-center text-[#D6BBFB] lg:text-lg lg:text-center">
            Copyright © 2024 Kinplus Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
