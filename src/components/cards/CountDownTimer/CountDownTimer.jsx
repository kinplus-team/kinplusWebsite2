import DesktopView from "../../../components/cards/CountDownTimer/DesktopView.jsx";
import MobileView from "../../../components/cards/CountDownTimer/MobileView.jsx";

export default function CountDownTimer({ image, time }) {
  return (
    <div>
      <div className="lg:block hidden">
        <DesktopView image={image.desktopImg} time={time} />
      </div>

      <div className="lg:hidden block">
        <MobileView image={image.mobileImg} time={time} />
      </div>
    </div>
  );
}
