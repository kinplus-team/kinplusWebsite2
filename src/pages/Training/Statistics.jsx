import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import PageLayout from "../../components/Layout/PageLayout";

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const startValue = 0;
    const endValue = value;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      const currentValue = Math.round(
        startValue + (endValue - startValue) * progress
      );
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, [value, duration, isInView]);

  return <span ref={countRef}>{count}</span>;
};

export default function Index() {
  const ourStats = [
    { title: "Resources", value: 112 },
    { title: "Trained", value: 713 },
    { title: "cohorts", value: 9 },
  ];

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <PageLayout>
      <motion.div
        style={{
          background:
            "linear-gradient(90deg, #909c92 20.73%, rgba(144, 156, 146, 0) 100%)",
        }}
        className="h-[1.4px] lg:mx-auto lg:max-w-7xl"
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />

      <motion.div
        className="grid grid-flow-col"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {ourStats.map((stat, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className={`text-center py-[55px] uppercase border border-t-0 border-b-0 ${
              i == 3 ? "border-r-0 " : "border-r-[1.1px] border-r-[#909C92]"
            } ${i == 0 && "border-l-0"}`}
          >
            <motion.p
              className="lg:text-[18px] text-xs lg:font-[500] font-normal leading-[15px] lg:tracking-[7.2px] tracking-[0.04px] text-[#718176]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {stat.title}
            </motion.p>
            <p className="lg:text-[24px] lg:font-[500] font-bold lg:leading-[166.667%] leading-6 tracking-[0.24px]">
              <Counter value={stat.value} />
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        style={{
          background:
            "linear-gradient(90deg, #909C92 20.73%, rgba(144, 156, 146, 0.00) 100%)",
        }}
        className="h-[1.4px] lg:mx-auto lg:max-w-7xl"
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
    </PageLayout>
  );
}
