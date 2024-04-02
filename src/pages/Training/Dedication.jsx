import PageLayout from "../../components/Layout/PageLayout";

export default function Index() {
  return (
    <PageLayout>
      <div className="grid lg:grid-cols-[55%_45%] lg:gap-10 gap-6 lg:pb-14">
        <h3 className="text-[#082B5B] lg:text-[40px] text-[35px] font-[700] lg:leading-[50px] leading-[40px] capitalized lg:max-w-xl max-w-sm">
          Unlock Your Potentials with Kinplus Training
        </h3>
        <p className="lg:text-[18px] leading-[27px]">
          In today's ever-changing tech landscape, learners and young people
          need access to up-to-date knowledge and career opportunities. With
          this in mind, we offer a variety of educational resources and
          opportunities for learning and development. Let's work together to
          bridge the gap between tech education and industry opportunities.
        </p>
      </div>
    </PageLayout>
  );
}
