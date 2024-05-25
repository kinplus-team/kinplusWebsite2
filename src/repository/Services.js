import mobile from "../assets/our_services/mobile.png";
import mobileF from "../assets/our_services/mobile-fade.png";
import hardware from "../assets/our_services/hardware.png";
import hardwareF from "../assets/our_services/hardware fade.png";
import image3 from "../assets/our_services/Rectangle 51.png";
import image2 from "../assets/our_services/Rectangle 11.png";

import hardwareSalesAndRepairs from "../assets/our_services/hardware_sales_and_repairs.png";
import hardwareSalesAndRepairsF from "../assets/our_services/hardware_sales_and_repairs_fade.png";

const haveAProjectInMind = [
  {
    id: 1,
    title: "Web Development",
    description:
      "At Kinplus, we take a user-centric approach to web development, creating solutions that elevate your digital presence and drive tangible results. Our solutions are designed to improve user engagement, increase conversions, and enhance brand awareness. We use the latest technologies and best practices to deliver a seamless, intuitive user experience. With our expertise, you can rest assured that your web development project will be in safe hands, from start to finish.",
    image: {
      image1: image3,
      image2: image2,
    },
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "Kinplus is a mobile development specialist, using the latest technologies and best practices to create innovative and user-friendly mobile solutions. Our team is dedicated to delivering mobile applications that are robust, functional, and seamless. We take a user-focused approach to ensure that your mobile application reflects your brand and drives the results you desire. With Kinplus, you can be confident that your mobile development project is in safe hands.",
    image: {
      image1: mobileF,
      image2: mobile,
    },
  },
  {
    id: 3,
    title: "Hardware Sale & Repairs",
    description:
      "At Kinplus, we offer top-quality hardware for sale, as well as expert repair services. We stock a wide range of the latest hardware from leading brands, ensuring that you have access to the best technology on the market. And if your hardware is in need of repair, our team of skilled technicians is here to help. We can diagnose and fix any issues, big or small, so you can get back to using your hardware as soon as possible. Rest assured that your hardware needs are in good hands with Kinplus",
    image: {
      image1: hardwareSalesAndRepairsF,

      image2: hardwareSalesAndRepairs,
    },
  },
];

const approachesToProductDevelopment = [
  {
    title: "Idea Generation",
    description:
      "This is how we start. We generate ideas, identify market voids, and examine consumer needs. We also conduct surveys and analyze the trends.",
  },
  {
    title: "Research",
    description:
      "We conduct diligent market research. We gain a deep understanding of the audience. The design and functionality of our products are informed by rich data.",
  },
  {
    title: "Planning",
    description:
      "We capture and document specific requirements to create a comprehensive plan. Our plan details the phases, the goals, and the processes. The features, functionality, and user experience are clear from the start.",
  },
  {
    title: "Product Design",
    description:
      "Employing the best UI/UX ideas, we pay close attention to the functionality, aesthetics, and usability of the product.",
  },
  {
    title: "Development and Engineering",
    description:
      "We translate designs into functional, working products. Our developers work collaboratively to build the actual solution, achieving the desired scalability, performance, and technical feasibility.",
  },
  {
    title: "Testing and Iteration:",
    description:
      "In order to ensure that our products meet quality standards, we conduct internal and user testing. We gather feedback, identify issues, and iterate.",
  },
];

export default { haveAProjectInMind, approachesToProductDevelopment };
