import PageLayout from "../../components/Layout/PageLayout";
import Text from "../../components/Text";

export default function Index() {
  return (
    <PageLayout>
      <div className="grid lg:grid-cols-[55%_45%] lg:gap-10 gap-6 -mb-10 lg:mb-0">
        <Text
          type="subheading"
          className="text-[#082B5B] text-[30px] lg:text-[40px] leading-[114.286%] capitalized lg:max-w-xl max-w-lg"
        >
          Unlock Your Potentials with Kinplus Training
        </Text>

        <Text type="subparagraph" className="text-[#101010]">
          In today's ever-changing tech landscape, learners and young people
          need access to up-to-date knowledge and career opportunities. With
          this in mind, we offer a variety of educational resources and
          opportunities for learning and development. Let's work together to
          bridge the gap between tech education and industry opportunities.
        </Text>
      </div>
    </PageLayout>
  );
}
