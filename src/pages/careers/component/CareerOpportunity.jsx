import PageLayout from "../../../components/Layout/PageLayout.jsx";
import { motion } from "framer-motion";
import careerOpportunitiesImage from "../../../assets/career/career-oppotunities.webp";
import developmentOpportunities from "../../../assets/svg/career/development-opportunities.svg";
import compensationAndBenefits from "../../../assets/svg/career/compensation-and-benefits.svg";
import timer from "../../../assets/svg/career/timer.svg";
import backgroundPattern from "../../../assets/svg/career/background-pattern.svg";
import pattern from "../../../assets/Pattern.svg";
import Text from "../../../components/Text.jsx";
import scrollDown from "../../../assets/career/scroll-down.svg";

export default function CareerOpportunity() {
  const careerOpportunities = [
    {
      icon: developmentOpportunities,
      title: "Learning and development opportunities",
      description:
        "Join our team and grow your career in an innovative and supportive environment.",
    },
    {
      icon: compensationAndBenefits,
      title: "Competitive compensation and benefits",
      description:
        "Your salary reflects your worth. Grow your career with competitive pay.",
    },
    {
      icon: timer,
      title: "Making a difference in the tech industry",
      description:
        "Join our team as we work to make a difference in the tech ecosystem",
    },
  ];

  // Container animation variant
  const containerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  // Item animation variant
  const itemVariant = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <PageLayout>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Text
            type="title"
            className="text-[#1877F9]"
          >
            Our leading edge
          </Text>
          <Text
            type="subheading"
            className="capitalize lg:max-w-3xl lg:pt-0 pt-3"
          >
            We bring solutions to make life easier for our customers.
          </Text>
          <Text
            type="subparagraph"
            className="text-[#556987] lg:pt-0 pt-3 max-w-2xl"
          >
            If you're passionate about technology and want to make an impact, we
            invite you to explore our career opportunities.
          </Text>
        </motion.div>

        <div className="grid lg:grid-cols-[750px_1fr] pt-6">
          <motion.div
            className="grid lg:gap-16 gap-10 content-center"
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {careerOpportunities.map((careerOpportunity, i) => (
              <motion.div
                key={i}
                className="grid grid-cols-[auto_1fr] lg:gap-6 gap-3"
                variants={itemVariant}
              >
                <motion.img
                  src={careerOpportunity.icon}
                  className="w-[46px] h-[46px]"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <div className="grid lg:gap-2 gap-1">
                  <h4 className="lg:text-2xl font-bold text-[#2A3342] leading-6">
                    {careerOpportunity.title}
                  </h4>
                  <p className="text-[#556987] lg:text-base text-sm font-medium leading-[24px] max-w-md">
                    {careerOpportunity.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* right side */}
          <div className="relative lg:h-[600px] h-[350px]">
            <motion.img
              src={careerOpportunitiesImage}
              className="w-[554px] lg:h-[556px] h-[389px] pt-10 rounded-lg absolute lg:top-0 top-5 lg:right-11 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            {/* background images */}
            <motion.img
              src={pattern}
              className="w-[200px] h-[200px] absolute top-0 left-[-10px] 2xl:left-[30px] z-0 rotate-180 hidden lg:block"
              initial={{ opacity: 0, rotate: 180 }}
              whileInView={{ opacity: 1, rotate: 360 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            />

            <motion.img
              src={backgroundPattern}
              className="w-[200px] h-[200px] absolute bottom-4 right-[-40px] 2xl:left-[30px] z-0 rotate-180 hidden lg:block"
              initial={{ opacity: 0, rotate: 180 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
            />
          </div>
        </div>

        <motion.div
          className="grid lg:grid-cols-2 gap-[10%] lg:gap-[20%] items-center pb-[8rem] lg:mb-0 py-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[#1877F9] lg:max-w-lg sm:my-12 lg:my-0 max-w-96 mt-20 lg:text-[108.474px] text-[64.024px] font-semibold leading-[75px] lg:leading-[110px]">
            Join us in building impactful products.
          </h1>
          <motion.img
            src={scrollDown}
            alt="scroll-down"
            className="w-[295px] lg:w-[377px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>
      </div>
    </PageLayout>
  );
}
