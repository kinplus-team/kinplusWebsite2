import DesktopView from "../../../components/cards/CountDownTimer/DesktopView.jsx";
import MobileView from "../../../components/cards/CountDownTimer/MobileView.jsx";
import formatNumber from "../../../utilities/formatNumber.js";
import { useCountdownTimer } from "../../../hooks/useCountDownTimer";

export default function CountDownTimer({ image }) {
  const { days, hours, minutes, seconds } = useCountdownTimer();

  return (
    <div>
      <div className="lg:block hidden">
        <DesktopView
          image={image.desktopImg}
          time={`00:00:00:00`}
        />
          {/* time={`${formatNumber(days)}:${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`}
         /> */}
      </div>

      <div className="lg:hidden block">
        <MobileView
          image={image.mobileImg}
          time={`00:00:00
          :00`}
          // time={`${formatNumber(days)}:${formatNumber(hours)}:${formatNumber(
          //   minutes
          // )}:${formatNumber(seconds)}`}
        />
      </div>
    </div>
  );
}
