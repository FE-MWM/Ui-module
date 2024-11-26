import { useEffect, useRef } from "react";
import styles from "./Chapter7.module.scss";

const Chapter7 = () => {
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hour = now.getHours();
      hour = hour % 12;
      hour = hour ? hour : 12;

      const secondsRatio = now.getSeconds() * 6;
      const minutesRatio = now.getMinutes() * 6 + now.getSeconds() * 0.1;
      const hoursRatio =
        hour * 30 + now.getMinutes() * 0.5 + now.getSeconds() * (0.5 / 60);

      console.log("Second hand angle:", secondsRatio);
      console.log("Minute hand angle:", minutesRatio);
      console.log("Hour hand angle:", hoursRatio);

      if (secondRef.current) {
        secondRef.current.style.transform = `rotate(${secondsRatio}deg)`;
      }
      if (minuteRef.current) {
        minuteRef.current.style.transform = `rotate(${minutesRatio}deg)`;
      }
      if (hourRef.current) {
        hourRef.current.style.transform = `rotate(${hoursRatio}deg)`;
      }
    };
    const timerId = setInterval(updateClock, 1000);
    updateClock();

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1>Analog Clock</h1>

      <div className={styles.clockWrapper}>
        {hours.map((hour) => (
          <div
            key={hour}
            className={styles.hourLocation}
            style={{ transform: `rotate(${hour * 30}deg)` }}
          >
            <span style={{ transform: `rotate(${-hour * 30}deg)` }}>
              {hour}
            </span>
          </div>
        ))}
        <div className={styles.clock}>
          <div ref={hourRef} className={`${styles.hand} ${styles.hour}`}></div>
          <div
            ref={minuteRef}
            className={`${styles.hand} ${styles.minute}`}
          ></div>
          <div
            ref={secondRef}
            className={`${styles.hand} ${styles.second}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Chapter7;
