import { useState, useEffect } from "react";
import countdownTimer from "../services/countdownTimerServices";

export const useCountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // let targetDate;

  useEffect(() => {
    // countdownTimer().then((response) => {
    let targetDate = new Date("10/29/2024 23:59:59");
    // });

    console.log(targetDate);

    if (targetDate != undefined) {
      const interval = setInterval(() => {
        const now = new Date();

        const difference = targetDate.getTime() - now.getTime();

        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });

        if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }

    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  });

  return timeLeft;
};
