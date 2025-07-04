import React from "react";
import facebookIcon from "../../assets/components/navbar/svg/facebook.svg";
import instagramIcon from "../../assets/components/navbar/svg/instagram.svg";
import linkedInIcon from "../../assets/components/navbar/svg/linkedIn.svg";
import twitterIcon from "../../assets/components/navbar/svg/twitter.svg";

export default function SocialLinks() {
  // Social media links
  const bottomIcons = [
    {
      icon: facebookIcon,
      link: "https://www.facebook.com/share/16sh7FXrok/",
    },
    {
      icon: linkedInIcon,
      link: "https://www.linkedin.com/company/kinplustechnologies/",
    },
    {
      icon: instagramIcon,
      link: "https://www.instagram.com/kinplustech?igsh=OTRmbHVxZDYyYmZi",
    },
    { icon: twitterIcon, link: "https://twitter.com/kinplustech" },
  ];

  return (
    <div className="flex justify-center gap-5 mt-3">
      {bottomIcons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={item.icon}
            className="w-6 h-6"
            alt="social icon"
          />
        </a>
      ))}
    </div>
  );
}
