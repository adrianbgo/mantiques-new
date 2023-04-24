import { useState, useEffect } from "react";
import styles from "./UnderConstruction.module.css";
import Image from "next/image";

interface Props {
  launchDate: Date;
}

const UnderConstruction: React.FC<Props> = ({ launchDate }) => {
  const [countdown, setCountdown] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const timeRemaining = launchDate.getTime() - Date.now();
      if (timeRemaining <= 0) {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        clearInterval(intervalId);
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        setCountdown({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [launchDate]);

  const { days, hours, minutes, seconds } = countdown;

  return (
    <div className={styles.container}>
      <h1>Site is Under Construction</h1>
      <p>We are working hard to bring you something awesome. Stay tuned!</p>
      <div className={styles.countdown}>
        <div className={styles["countdown-item"]}>
          <span>{days}</span>
          <span>days</span>
        </div>
        <div className={styles["countdown-item"]}>
          <span>{hours}</span>
          <span>hours</span>
        </div>
        <div className={styles["countdown-item"]}>
          <span>{minutes}</span>
          <span>minutes</span>
        </div>
        <div className={styles["countdown-item"]}>
          <span>{seconds}</span>
          <span>seconds</span>
        </div>
      </div>

      <Image
        src="/images/placeholder-image.jpeg"
        alt="placeholder"
        width="840"
        height="640"
      />
    </div>
  );
};

export default UnderConstruction;
