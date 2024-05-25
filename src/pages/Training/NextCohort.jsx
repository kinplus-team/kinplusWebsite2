import smileyFaces from "../../assets/components/nextcohort/smiling-faces.jpeg";
import graphicsDesign from "../../assets/components/nextcohort/graphics-design.jpeg";
import CountDownTimer from "../../components/cards/CountDownTimer/CountDownTimer.jsx";
import PageLayout from "../../components/Layout/PageLayout.jsx";

export default function NextCohort() {
  const countDownTimerProps = {
    desktopImg: smileyFaces,
    mobileImg: graphicsDesign,
    countDownTimer: "00:00:00:00",
  };

  return (
    <PageLayout>
      <CountDownTimer
        image={countDownTimerProps}
        time={countDownTimerProps.countDownTimer}
      />
    </PageLayout>
  );
}
