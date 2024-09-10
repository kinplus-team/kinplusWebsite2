import image10 from "../../../assets/our_services/image 10.webp";
import rectangle from "../../../assets/our_services/Rectangle 1.png";
import { FaQuoteRight } from "react-icons/fa6";
import PageLayout from "../../../components/Layout/PageLayout";
import Text from "../../../components/Text";

export default function Hero() {
  return (
    <PageLayout className="pt-24">
      <div id="target-section" className="flex items-center gap-3">
        <Text type="title" className="text-[#1877F9] capitalize">
          Our Services
        </Text>
        {/* <h3 className="text-[#1877F9] font-medium leading-8 text-xl"></h3> */}

        {/* <img src={rectangle} className="w-20 h-[2px] " alt="" /> */}
      </div>

      <div className="grid lg:grid-cols-2 gap-3 my-4 lg:my-0 items-center">
        <Text type="heading" className="text-[#082B5B] text-[35px] lg:text-[52px]">
          Empowering Creativity, Building Excellent products.
        </Text>

        <Text type="subparagraph" className="text-[#101010] lg:ml-[55px] mt-[12px] lg:mt-[-40px] lg:w-[87%]">
          We believe that creativity is the key to building excellence. Our
          products are designed with love and attention to detail, to create an
          emotional connection with users. We strive to create products that are
          not only functional, but also beautiful and meaningful.
        </Text>
      </div>

      <div className="relative grid lg:grid-cols-[350px_1fr] lg:py-10 pt-32">
        <div className="hidden lg:block"></div>

        {/* Text quote on image */}
        <div className="absolute lg:top-[20%] top-[10%] lg:left-0 left-10  bg-[#1877F9] lg:h-[429px] lg:w-[455px] w-[290px] h-[197px] pl-10">
          <FaQuoteRight className="rotate-180 lg:text-9xl text-5xl text-white m-0 p-0" />
          <div className="grid mx-auto lg:max-w-sm max-w-60">
            <p className="text-white lg:text-xl text-sm lg:leading-10 leading-5 lg:font-medium ">
              Whether we’re building new products from ground up, or
              transforming existing infrastructure, we know what it takes to
              make a digital product succeed at scale.
            </p>
          </div>
        </div>

        <img
          src={image10}
          alt=""
          className="w-full lg:h-auto h-[200px] justify-end"
        />
      </div>
    </PageLayout>
  );
}
