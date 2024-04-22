import DesktopView from "../../../components/cards/CountDownTimer/DesktopView.jsx";
import MobileView from "../../../components/cards/CountDownTimer/MobileView.jsx";
import formatNumber from "../../../utilities/formatNumber.js";
import { useCountdownTimer } from "../../../hooks/useCountDownTimer";

export default function CountDownTimer({ image, time }) {
  const targetDate = new Date("10/12/2024 23:59:59");
  const { days, hours, minutes, seconds } = useCountdownTimer(targetDate);

  return (
    <div>
      <div className="lg:block hidden">
        <DesktopView
          image={image.desktopImg}
          time={`${formatNumber(days)}:${formatNumber(hours)}:${formatNumber(
            minutes
          )}:${formatNumber(seconds)}`}
        />
      </div>

      <div className="lg:hidden block">
        <MobileView
          image={image.mobileImg}
          time={`${formatNumber(days)}:${formatNumber(hours)}:${formatNumber(
            minutes
          )}:${formatNumber(seconds)}`}
        />
      </div>
    </div>
  );
}
