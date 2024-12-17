import smileyFaces from "../../../assets/components/nextcohort/smiling-faces.webp";
import graphicsDesign from "../../../assets/components/nextcohort/graphics-design.webp";
import CountDownTimer from "../../../components/cards/CountDownTimer/CountDownTimer.jsx";
import PageLayout from "../../../components/Layout/PageLayout.jsx";

export default function NextCohortHome() {
  const countDownTimerProps = {
    desktopImg: smileyFaces,
    mobileImg: graphicsDesign,
  };

  return (
      <CountDownTimer image={countDownTimerProps} />
 
  );
}
