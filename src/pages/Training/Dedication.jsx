import PageLayout from "../../components/Layout/PageLayout";
import Text from "../../components/Text";
import { motion } from "framer-motion";

export default function Index() {
  // Define animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <PageLayout>
      <div className="grid lg:grid-cols-[45%_50%] gap-4 -mb-10 lg:mb-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} 
          variants={fadeInUp}
          transition={{ duration: 1 }}
        >
          <Text
            type="subheading"
            className="text-[#082B5B] text-[30px] lg:text-[40px] leading-[114.286%] capitalized lg:max-w-xl max-w-lg"
          >
            Unlock Your Potentials with Kinplus Training
          </Text>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} 
          variants={fadeInUp}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Text
            type="subparagraph"
            className="text-[#101010]"
          >
            In today's ever-changing tech landscape, learners and young people
            need access to up-to-date knowledge and career opportunities. With
            this in mind, we offer a variety of educational resources and
            opportunities for learning and development. Let's work together to
            bridge the gap between tech education and industry opportunities.
          </Text>
        </motion.div>
      </div>
    </PageLayout>
  );
}
