import { motion } from "framer-motion";
import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import CodeImage from "../../../assets/pages/home/whatWeDo/codeImage.mp4";
import mobileDev from "../../../assets/pages/home/whatWeDo/mobileDev.mp4";
import hardwareImage from "../../../assets/pages/home/whatWeDo/hardwareImage.mp4";
import PageLayout from "../../../components/Layout/PageLayout";
import Text from "../../../components/Text";

// Animation Variants
const fadeInDown = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.8 } },
};

export default function WhatWeDoHome() {
  const WhatWeDoCardDetails = [
    {
      image: `${CodeImage}`,
      imageWidth: 150,
      imageHeight: 125,
      imageAltText: "Web_development_svg_image",
      title: "Web Development",
      text: "We help you unlock the power of the web. We create websites that are beautiful, functional, and aligned with your brand. With our expertise, we'll transform your digital presence and help you reach new heights.",
    },
    {
      image: `${mobileDev}`,
      imageWidth: 150,
      imageHeight: 100,
      imageAltText: "Mobile_development_svg_image",
      title: "Mobile Development",
      text: "We bring your mobile vision to life. We create user-friendly and impactful mobile apps that elevate your brand and increase your reach. Our team has the skills and experience to take your digital presence to the next level.",
    },
    {
      image: `${hardwareImage}`,
      imageWidth: 100,
      imageHeight: 100,
      imageAltText: "Hardware_svg_image",
      title: "Hardware Repairs",
      text: "We'll get your hardware working like new. Our repair experts are skilled in fixing a range of devices, and we take pride in delivering top-quality results. When you trust us with your repairs, you'll get the best possible performance from your devices.",
    },
  ];

  return (
    <PageLayout>
      {/* Animated Title */}
      <motion.div {...fadeInDown}>
        <Text
          type="title"
          className="text-blue-700 capitalize"
        >
          What We Do
        </Text>
      </motion.div>

      <div className="grid lg:gap-16 gap-5">
        {/* Subtitle and Button Section */}
        <motion.div
          className="grid lg:grid-cols-[auto_1fr] gap-4 lg:gap-36 lg:py-8 pt-3"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div {...fadeInLeft}>
            <Text
              type="subheading"
              className="capitalize text-[#082B5B] max-w-xl"
            >
              We create beautiful products that capture the heart
            </Text>
          </motion.div>

          <div className="grid gap-6 place-self-center">
            <motion.div {...fadeInDown}>
              <Text
                type="subparagraph"
                className="text-[#556987]"
              >
                We craft products that speak to people's emotions. Our designs
                are both functional and beautiful, and they connect with people
                on a deep level. We believe that the best products are the ones
                that touch our hearts.
              </Text>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Link
                to="/our-services"
                className="w-40"
              >
                <Button
                  type="customizedBlue"
                  text="Discover More"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Service Cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center text-center py-5"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {WhatWeDoCardDetails.map((WhatWeDoCardDetail, index) => (
            <motion.div
              key={index}
              {...fadeInUp}
              className="grid lg:grid-rows-[80px_auto_160px] overflow-hidden grid-rows-[90px_auto_1fr] justify-center items-center gap-5 bg-white rounded-[0.6em] lg:px-8 px-3 py-6 shadow-md border-2"
            >
              <div className="h-[100px] w-[100px] mx-auto">
                <video
                  src={WhatWeDoCardDetail.image}
                  width={WhatWeDoCardDetail.imageWidth}
                  height={WhatWeDoCardDetail.imageHeight}
                  alt={WhatWeDoCardDetail.imageAltText}
                  className="object-cover place-self-center"
                  loop
                  autoPlay
                  muted
                />
              </div>

              <h3 className="font-medium text-[#2A3342] lg:text-[32px] text-[28px] capitalize leading-normal">
                {WhatWeDoCardDetail.title}
              </h3>

              <Text
                type="subparagraph"
                className="text-[#556987] sm:text-sm lg:text-base place-self-center"
              >
                {WhatWeDoCardDetail.text}
              </Text>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageLayout>
  );
}
