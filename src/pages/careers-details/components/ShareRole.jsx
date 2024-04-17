import React from "react";
import Button from "../../../components/Button";
import shareLink from "../../../assets/svg/career-details/share-link.svg";
import instagram from "../../../assets/svg/career-details/instagram.svg";
import linkedIn from "../../../assets/svg/career-details/linkedIn.svg";
import twitter from "../../../assets/svg/career-details/twitter.svg";

export default function ShareRole() {
  const shareToSocialMedia = [shareLink, instagram, linkedIn, twitter];
  return (
    <div className="grid grid-rows-[1fr_1fr_auto] gap-2">
      <Button type="customizedBlue" text="Apply Now" />

      <div className="h-[1px] w-full border border-[#ECECEC] place-self-center"></div>

      <div>
        <p className="text-[#0D0C22] text-center text-xl font-bold leading-6 capitalize">
          Share This job
        </p>
        <div className="flex gap-2 py-3">
          {shareToSocialMedia.map((socialMedia) => (
            <img src={socialMedia} className="w-10 h-10" />
          ))}
        </div>
      </div>
    </div>
  );
}
