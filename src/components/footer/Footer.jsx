import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../Button";
import footerBg2 from "../../assets/footer/footer-bg-2.webp";
import kinplusLogoBlue from "../../assets/kinplusBlue.webp";
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
    {
      type: "Phone",
      value: "+234 707 519 9782,",
      valueOne: "+234 811 640 0858",
    },
  ];

  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "About us", url: "/about-us" },
    { name: "Service", url: "/our-services" },
    { name: "Training", url: "/trainings" },
    { name: "Blog", url: "https://blog.kinplusgroup.com/" },
  ];

  const resources = [
    { name: "Workshop", url: "/trainings/workshop" },
    { name: "Events", url: "/events" },
    { name: "Careers", url: "/careers" },
  ];

  const socialMediaIcons = [
    {
      icon: facebook,
      link: "https://www.facebook.com/share/16sh7FXrok/",
    },
    {
      icon: linkedIn,
      link: "https://www.linkedin.com/company/kinplustechnologies/",
    },
    {
      icon: instagram,
      link: "https://www.instagram.com/kinplustech?igsh=OTRmbHVxZDYyYmZi",
    },
    {
      icon: x,
      link: "https://twitter.com/kinplustech",
    },
    {
      icon: youtube,
      link: "https://www.youtube.com/@kinplustech",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div>
      {/* top section */}
      <motion.div
        className="bg-[#1C1D20] text-white grid lg:grid-cols-[auto_1fr] gap-5 py-20 lg:px-[150px] px-7 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="grid lg:gap-10 gap-6" variants={itemVariants}>
          <div className="lg:text-7xl text-4xl font-bold lg:leading-[80px] lg:text-left text-center lg:max-w-4xl">
            {pathname !== "/trainings" ? (
              <p>
                Ready to <span className="text-[#1877F9]">work</span> on your
                next project.
              </p>
            ) : (
              <p>
                Join our <span className="text-[#1877F9]">leading</span>{" "}
                learning programs today
              </p>
            )}{" "}
          </div>

          <p className="lg:text-[24px] text-xl leading-[32px] lg:text-left text-center lg:max-w-2xl max-w-80 mx-auto lg:mx-0">
            Start learning by registering or reaching out to us
          </p>
        </motion.div>

        <motion.div
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
          className="place-self-center"
        >
          <Link
            to={
              pathname !== "/trainings"
                ? "/contact-us/services"
                : "/contact-us/training"
            }
            className="w-40"
          >
            <Button type="customizedWhite" text="Talk to us" />
          </Link>
        </motion.div>
      </motion.div>

      {/* bottom section */}
      <div
        className="w-full"
        style={{
          backgroundImage: `url(${footerBg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          className="py-10 lg:px-[110px] px-7"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          <div className="grid lg:grid-cols-[auto_1fr_1fr] text-white lg:gap-5 gap-8 lg:pb-16">
            {/* contact */}
            <motion.div variants={itemVariants} className="">
              <Link to={"/"}>
                <img
                  src={kinplusLogoBlue}
                  alt="kinplus-logo"
                  className="w-[150px] h-[42.02px] mb-[30px]"
                />
              </Link>

              <div className="lg:mr-[5em] 2xl:mr-[10em]">
                {contactDetails.map((contactDetail, i) => (
                  <div key={i} className="lg:text-lg">
                    {i === 0 ? (
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
                      <div className="flex flex-col md:flex-row gap-1 text-[15px] lg:text-base">
                        {contactDetail.type}:
                        <Link
                          className="underline"
                          to="https://wa.me/+2347075199782"
                        >
                          {contactDetail.value}
                        </Link>
                        <Link
                          className="underline"
                          to="https://wa.me/+2348116400858"
                        >
                          {contactDetail.valueOne}
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* quick links*/}
            <motion.div variants={itemVariants} className="grid grid-cols-2">
              <div>
                <p className="text-[#1877F9] mb-5 lg:text-lg font-bold">
                  Quick links
                </p>
                {quickLinks.map((quickLink, i) => (
                  <div key={i}>
                    {quickLink.url.startsWith("https") ? (
                      <a
                        href={quickLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navLinkHover text-[#F1F1F1] inline-flex lg:text-lg my-[5px]"
                      >
                        {quickLink.name}
                      </a>
                    ) : (
                      <Link
                        to={quickLink.url}
                        className="navLinkHover text-[#F1F1F1] inline-flex lg:text-lg my-[5px]"
                      >
                        {quickLink.name}
                      </Link>
                    )}
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
            </motion.div>

            {/* address and social media links */}
            <motion.div variants={itemVariants}>
              <p className="lg:text-[18px] lg:leading-[35px] leading-[24px]">
                2nd Floor, Christore Building, <br />
                Opp. Crunchies Restaurant, Similoluwa, <br />
                Ado Ekiti, Ekiti State, Nigeria.
              </p>

              <div className="flex gap-6 my-3 pt-3">
                {socialMediaIcons.map((socialMediaIcon, i) => (
                  <a href={socialMediaIcon.link} key={i} rel="noopener noreferrer" target="_blank">
                    <img
                      src={socialMediaIcon.icon}
                      alt="social media icon"
                      className="w-9 h-9"
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="h-[0.5px] w-full bg-white lg:mt-8 mt-4 mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-center text-[#F1F1F1F1] lg:text-lg lg:text-center"
          >
            Copyright © {new Date().getFullYear()} Kinplus Technologies. All
            rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
