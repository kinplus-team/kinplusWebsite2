import DesktopView from "../../../components/cards/CountDownTimer/DesktopView.jsx";
import MobileView from "../../../components/cards/CountDownTimer/MobileView.jsx";
import formatNumber from "../../../utilities/formatNumber.js";
import { useCountDownTimer } from "../../../hooks/useCountDownTimer";

export default function CountDownTimer({ image }) {
  const { days, hours, minutes, seconds } = useCountDownTimer();

  const formattedTime = `${formatNumber(days)}:${formatNumber(
    hours
  )}:${formatNumber(minutes)}:${formatNumber(seconds)}`;

  return (
    <div>
      <div className="md:block hidden">
        <DesktopView
          image={image.desktopImg}
          time={formattedTime}
        />
      </div>
      <div className="md:hidden block">
        <MobileView
          image={image.mobileImg}
          time={formattedTime}
        />
      </div>
    </div>
  );
}
