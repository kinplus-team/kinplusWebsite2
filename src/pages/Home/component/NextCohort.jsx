import smileyFaces from "../../../assets/components/nextcohort/smiling-faces.jpeg";
import graphicsDesign from "../../../assets/components/nextcohort/graphics-design.jpeg";
import CountDownTimer from "../../../components/cards/CountDownTimer/CountDownTimer.jsx";

export default function NextCohort() {
  const countDownTimerProps = {
    desktopImg: smileyFaces,
    mobileImg: graphicsDesign,
  };

  return (
    <div className="lg:py-40 py-10">
      <CountDownTimer image={countDownTimerProps} />
    </div>
  );
}
