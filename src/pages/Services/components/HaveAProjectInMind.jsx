import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import PageLayout from "../../../components/Layout/PageLayout";
import iconbg1 from "../../../assets/training/Icons.png";
import iconbg2 from "../../../assets/training/Icons.png";
import servicesRepo from "../../../repository/Services";
import Text from "../../../components/Text";
import { motion } from "framer-motion";

export default function HaveAProjectInMind() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: 0.2 },
  };

  const scaleIn = {
    initial: { scale: 0.8, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: 0.3 },
  };

  const slideInLeft = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  const slideInRight = {
    initial: { x: 100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <PageLayout>
      {/* Add overflow-x-hidden to hide the horizontal scrollbar */}
      <div className="overflow-hidden ">
        {/* header */}
        <div className="grid lg:grid-cols-2 gap-3">
          <motion.div {...fadeInUp}>
            <Text
              type="subheading"
              className="capitalize text-[#082B5B] max-w-lg"
            >
              Have a project in mind? Let's get started here
            </Text>
          </motion.div>

          <motion.div {...fadeIn}>
            <Text
              type="subparagraph"
              className="text-[#101010]"
            >
              At Kinplus, we tackle intricate business challenges through
              exceptional strategy, marketing, and product development services.
            </Text>
          </motion.div>
        </div>

        {servicesRepo.haveAProjectInMind.map((projectInMind, index) => (
          <div
            key={index}
            className={`grid lg:grid-cols-[20%_38%_1fr] ${
              index === 1
                ? "lg:grid-cols-[33%_auto_300px]"
                : "lg:grid-cols-[20%_38%_1fr]"
            } lg:gap-10 gap-3 lg:py-40 py-10`}
          >
            {/* mobile view */}
            <motion.div
              className="lg:hidden flex gap-3 items-center"
              {...fadeInUp}
            >
              <motion.p
                className="text-6xl font-bold leading-[60px] text-[#082B5B]"
                {...scaleIn}
              >
                {projectInMind.id}
              </motion.p>
              <div className="bg-[#082B5B] h-7 w-[0.2rem]"></div>
              <motion.p
                className="text-[#082B5B] text-2xl font-bold leading-7"
                {...fadeIn}
              >
                {projectInMind.title}
              </motion.p>
            </motion.div>

            {/* desktop view */}
            <motion.div
              className={`lg:grid ${
                index !== 1 ? "grid-cols-[auto_1fr]" : "grid-cols-[auto_300px]"
              } gap-5 justify-self-end hidden ${index === 1 && "order-last"}`}
              {...slideInLeft}
            >
              <div
                className={`bg-[#082B5B] w-[0.2rem] ${index !== 1 && "hidden"}`}
              ></div>
              <motion.p
                className="self-start text-[#082B5B] text-[12.5rem] font-bold mt-[-70px]"
                {...scaleIn}
              >
                {projectInMind.id}
              </motion.p>
              <div
                className={`bg-[#082B5B] w-[0.2rem] ml-10 ${
                  index === 1 && "hidden"
                }`}
              ></div>
            </motion.div>

            <motion.div
              className="max-w-lg grid grid-rows-[auto_auto_1fr] gap-4"
              {...fadeInUp}
            >
              <Text
                type="subheading"
                className="text-[#082B5B] capitalize hidden lg:block"
              >
                {projectInMind.title}
              </Text>

              <Text
                type="subparagraph"
                className="text-[#101010]"
              >
                {projectInMind.description}
              </Text>

              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to="/contact-us/services"
                  className="w-40 absolute top-0 z-50 self-center"
                >
                  <Button
                    type="customizedBlue"
                    text="Talk to us"
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* mobile view */}
            <motion.div
              className="py-10 lg:hidden block"
              {...fadeIn}
            >
              <div className="relative w-full h-96 z-0">
                <motion.div
                  className="absolute top-[-60px] right-0 z-[-150px] lg:flex"
                  {...slideInRight}
                >
                  <img
                    src={iconbg2}
                    alt=""
                    className="mt-[-40px]"
                  />
                </motion.div>
                <motion.div
                  className="absolute top-[5%] mt-[30px] z-[100]"
                  {...slideInLeft}
                >
                  <img
                    src={projectInMind.image.image1}
                    alt=""
                    className="w-full"
                  />
                </motion.div>
                <motion.div
                  className="absolute z-[150] top-5 left-[5%]"
                  {...slideInRight}
                >
                  <img
                    src={projectInMind.image.image2}
                    alt=""
                    className="w-full"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className={`relative w-full hidden lg:block ${
                index === 1 && "order-first"
              }`}
              {...fadeIn}
            >
              <motion.div
                className="absolute top-[-150px] flex"
                {...slideInRight}
              >
                <img
                  src={iconbg1}
                  alt=""
                  className="mt-[-20px] ml-[-40px]"
                />
                <img
                  src={iconbg2}
                  alt=""
                  className="mt-[-40px] ml-[-80px]"
                />
              </motion.div>
              <motion.div
                className="absolute top-[5%] mt-[30px] z-[10]"
                {...slideInLeft}
              >
                <img
                  src={projectInMind.image.image1}
                  alt=""
                  className="w-full"
                />
              </motion.div>
              <motion.div
                className="absolute z-[200] top-5 left-[5%]"
                {...slideInRight}
              >
                <img
                  src={projectInMind.image.image2}
                  alt=""
                  className="w-full"
                />
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
