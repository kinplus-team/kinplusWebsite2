import smileyFaces from "../../assets/training/smiling-faces.jpeg";
import graphicsDesign from "../../assets/training/graphics-design.jpeg";
import CountDownTimer from "../../components/cards/CountDownTimer/CountDownTimer.jsx";

export default function NextCohort() {
  const countDownTimerProps = {
    desktopImg: smileyFaces,
    mobileImg: graphicsDesign,
  };

  return (
    <div>
      <CountDownTimer image={countDownTimerProps} />
    </div>
  );
}
