import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../../../components/Button";
import shareLink from "../../../assets/svg/career-details/share-link.svg";
import instagram from "../../../assets/svg/career-details/instagram.svg";
import linkedIn from "../../../assets/svg/career-details/linkedIn.svg";
import twitter from "../../../assets/svg/career-details/twitter.svg";
import { toast } from "react-toastify";

export default function ShareRole() {
  const pathname = useLocation();
  const url = pathname.pathname;
  const shareToSocialMedia = [shareLink, instagram, linkedIn, twitter];

  const copyToclipBoard = async (message) => {
    navigator.clipboard.writeText(`kinplus.netlify.app${url}`);
    toast.success(message);
  };

  const uploadJobPosterToSocialMedia = (message, socialMedia) => {
    copyToclipBoard(message).then(() => {
      setTimeout(() => {
        const shareUrl = `https://www.${socialMedia}.com/`;
        window.open(shareUrl, "_blank");
      }, 3000);
    });
  };

  return (
    <div className="grid grid-rows-[1fr_1fr_auto] gap-2">
      {/* <Button type="customizedBlue" text="Apply Now" /> */}

      <div className="h-[1px] w-full border border-[#ECECEC] place-self-center"></div>

      <div>
        <p className="text-[#0D0C22] text-center text-xl font-bold leading-6 capitalize">
          Share This job
        </p>
        <div className="flex gap-2 py-3">
          {shareToSocialMedia.map((socialMedia, index) => (
            <img
              key={index}
              src={socialMedia}
              onClick={() => {
                index == 0 && copyToclipBoard("Job poster copied to clipboard");
                index == 1 &&
                  uploadJobPosterToSocialMedia(
                    "Job poster copied to clipboard, proceed to uploading it on instagram",
                    "instagram"
                  );

                index == 2 &&
                  uploadJobPosterToSocialMedia(
                    "Job poster copied to clipboard, proceed to uploading it on Linkedin",
                    "linkedin"
                  );

                index == 3 &&
                  uploadJobPosterToSocialMedia(
                    "Job poster copied to clipboard, proceed to uploading it on X",
                    "X"
                  );
              }}
              className="w-10 h-10 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
