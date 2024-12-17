import PageLayout from "../../../components/Layout/PageLayout.jsx";
import { motion } from "framer-motion";
import careerOpportunitiesImage from "../../../assets/career/career-oppotunities.png";
import developmentOpportunities from "../../../assets/svg/career/development-opportunities.svg";
import compensationAndBenefits from "../../../assets/svg/career/compensation-and-benefits.svg";
import timer from "../../../assets/svg/career/timer.svg";
import backgroundPattern from "../../../assets/svg/career/background-pattern.svg";
import pattern from "../../../assets/Pattern.svg";
import Text from "../../../components/Text.jsx";

export default function WorkshopReportDetails() {
  const careerOpportunities = [
    {
      icon: developmentOpportunities,
      title: "Participant Attendance:",
      description: [
        "85 participants attended the training sessions.",
        "Training centers were set up in three communities: Ado-Ekiti, Ido-Ekiti, and Ikole-Ekiti.",
      ],
    },
    {
      icon: compensationAndBenefits,
      title: "Positive Feedback:",
      description: [
        "Participants provided positive feedback on the training.",
        "Encouraging words were extended to both Kinplus Technologies and NITDA.",
        "Participants expressed gratitude for the knowledge gained during the training.",
      ],
    },
    {
      icon: timer,
      title: "Supportive Measures:",
      description: [
        "Participants were provided with daily meals throughout the training period.",
        "NITDA offered a stipend to participants as part of their support initiative.",
      ],
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

  // Description list item animation variant
  const listItemVariant = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <PageLayout>
      <div className="relative mb-24 lg:mb-0">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Text
            type="title"
            className="text-[#1877F9]"
          >
            Workshop report
          </Text>

          <Text
            type="subheading"
            className="capitalize lg:max-w-3xl"
          >
            Kinplus-NITDA: Concise Deductions from Workshop Program
          </Text>
        </motion.div>

        <div className="grid lg:grid-cols-[700px_auto] py-2">
          <motion.div
            className="grid lg:gap-12 gap-10 content-center"
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

                  <motion.ul
                    variants={containerVariant}
                    initial="hidden"
                    animate="show"
                  >
                    {careerOpportunity.description.map((listItem, index) => (
                      <motion.li
                        key={index}
                        variants={listItemVariant}
                        className="text-[#556987] lg:text-base text-sm font-medium leading-[24px] max-w-md list-disc"
                      >
                        {listItem}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* right side */}
          <div className="relative lg:h-[600px] h-[350px]">
            <motion.img
              src={careerOpportunitiesImage}
              className="w-[554px] lg:h-[556px] h-[389px] rounded-lg absolute lg:top-0 top-5 lg:right-11 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            {/* background images */}
            <motion.img
              src={pattern}
              className="w-[200px] h-[200px] absolute top-4 left-[-60px] 2xl:left-[30px] z-0 rotate-180 hidden lg:block"
              initial={{ opacity: 0, rotate: 180 }}
              whileInView={{ opacity: 1, rotate: 360 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            />

            <motion.img
              src={backgroundPattern}
              className="w-[200px] h-[200px] absolute bottom-4 right-[-20px] 2xl:left-[30px] z-0 rotate-180 hidden lg:block"
              initial={{ opacity: 0, rotate: 180 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
