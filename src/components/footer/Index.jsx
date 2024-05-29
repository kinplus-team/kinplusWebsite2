import { Link, useLocation } from "react-router-dom";
import Button from "../Button";
import footerBg2 from "../../assets/footer/footer-bg-2.png";
import kinplusLogoBlue from "../../assets/kinplusBlue.png";
import facebook from "../../assets/svg/social-media-icons/facebook.svg";
import instagram from "../../assets/svg/social-media-icons/instagram.svg";
import linkedIn from "../../assets/svg/social-media-icons/linkedin.svg";
import x from "../../assets/svg/social-media-icons/x.svg";
import youtube from "../../assets/svg/social-media-icons/youtube.svg";

export default function Footer() {
  const location = useLocation();
  const { pathname } = location;

  const contactDetails = [
    { type: "Email", value: "help@kinplusgroup.com" },
    { type: "Phone", value: "+234 706 971 8643" },
  ];

  const quickLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About us",
      url: "/about-us",
    },
    {
      name: "Service",
      url: "/our-services",
    },
    {
      name: "Training",
      url: "/trainings",
    },
    {
      name: "Blog",
      url: "/blog",
    },
  ];

  const resources = [
    {
      name: "Workshop",
      url: "/trainings/workshop",
    },
    {
      name: "Events",
      url: "",
    },
    {
      name: "Careers",
      url: "/careers",
    },
  ];
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
    { icon: youtube, link: "https://www.youtube.com/@kinplustech" },
  ];

  return (
    <div>
      {/* top section */}
      <div className="bg-[#1C1D20] text-white grid lg:grid-cols-[auto_1fr] gap-5 py-20 lg:px-[150px] px-7 mx-auto">
        <div className="grid lg:gap-10 gap-6">
          {pathname !== "/trainings" ? (
            <h3 className="lg:text-7xl text-4xl font-bold lg:leading-[80px] lg:text-left text-center lg:max-w-4xl">
              Ready to <span className="text-[#1877F9]">work</span> on your next
              project.
            </h3>
          ) : (
            <h3 className="lg:text-7xl text-4xl font-bold lg:leading-[80px] lg:text-left text-center lg:max-w-5xl">
              Join our <span className="text-[#1877F9]">leading</span> learning
              programs today
            </h3>
          )}

          <p className="lg:text-[24px] text-xl leading-[32px] lg:text-left text-center lg:max-w-2xl max-w-80 mx-auto lg:mx-0 ">
            Start learning by registering or reaching out to us
          </p>
        </div>

        <Link
          to={
            pathname !== "/trainings"
              ? "/contact-us/services"
              : "/contact-us/training"
          }
          className="w-40 place-self-center"
        >
          <Button type="customizedWhite" text="Talk to us" />
        </Link>
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
                  <div key={i} className={`lg:text-lg`}>
                    {i == 0 ? (
                      <div className="flex gap-1">
                        {contactDetail.type}:{" "}
                        <Link
                          className="underline"
                          to={`mailto:${contactDetail.value}`}
                        >
                          {contactDetail.value}
                        </Link>
                      </div>
                    ) : (
                      <div className="flex gap-1">
                        {contactDetail.type}:
                        <Link
                          className="underline"
                          to="https://wa.me/+2347069718643"
                        >
                          {contactDetail.value}
                        </Link>
                      </div>
                    )}
                  </div>
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
                  <div key={i}>
                    <Link
                      to={quickLink.url}
                      className="navLinkHover text-[#F1F1F1]  inline-flex  lg:text-lg my-[5px]"
                    >
                      {quickLink.name}
                    </Link>
                  </div>
                ))}
              </div>

              {/* resources */}
              <div>
                <p className="text-[#1877F9] mb-5 lg:text-lg font-bold">
                  Resources
                </p>
                {resources.map((resource, i) => (
                  <div key={i}>
                    <Link
                      to={resource.url}
                      className="navLinkHover inline-flex text-[#f1f1f1] lg:text-lg my-[5px]"
                    >
                      {resource.name}
                    </Link>
                  </div>
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
          <p className="text-center text-[#F1F1F1F1] lg:text-lg lg:text-center">
            Copyright © 2024 Kinplus Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
