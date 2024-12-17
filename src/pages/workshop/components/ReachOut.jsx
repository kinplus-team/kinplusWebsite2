import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Text from "../../../components/Text";
import {  motion } from "framer-motion";

export default function ReachOut() {
  // animation variants
  const slideFromUp = {
    initial: { y: -100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: {duration: 0.8}
  }
  
  const slideFromBottom = {
    initial: { y: 100, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: {duration: 0.8}
  }
  
  const slideFromLeft = {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: {duration: 0.8}
  }
 
  const slideFromRight = {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: {duration: 0.8}
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    transition: { duration: 0.8 },
  };

  return (
    <div className="relative ">
      <motion.div
        {...slideFromUp}
        className="bg-[#082B5B] h-[300px] w-full"
      />
      <motion.div
        {...slideFromBottom}
        className="bg-[#1877F9] h-[300px] w-full"
      />

      <div className="bg-white grid lg:grid-cols-[1fr_200px] gap-3 lg:max-w-7xl max-w-[350px] absolute items-center lg:top-[25%] top-[12%] right-0 left-0 mx-auto lg:p-14 p-7">
        <div className="grid gap-2">
          <motion.div {...slideFromLeft}>
            <Text type="subheading">
              Make an impact on the future of tech. Sponsor a training workshop.
            </Text>
          </motion.div>
          <motion.div {...slideFromRight}>
            <Text
              type="paragraph"
              className="text-[#556987]"
            >
              Are you looking to make a difference in the tech industry? Sponsor
              a training workshop and help shape the future of the tech
              industry.
            </Text>
          </motion.div>
        </div>
        <motion.div {...fadeInUp}>
          <Link to="/sponsor-or-partner-with-us">
            <Button
              type="customizedBlue"
              text="Reach Out"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
