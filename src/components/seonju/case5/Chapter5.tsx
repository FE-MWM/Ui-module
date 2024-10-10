import { useRef, useState } from "react";
import styles from "./Chapter5.module.scss";
import { formatTime } from "./formatTime";

const Chapter5 = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRaf = useRef<number | null>(null);

  const handleStart = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      intervalRaf.current = window.setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
      setIsRunning(true);
    } else {
      clearInterval(intervalRaf.current!);
      setIsRunning(false);
    }
  };

  const resetStop = () => {
    clearInterval(intervalRaf.current!);
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleLab = () => {
    if (isRunning) {
      console.log("lap");
      setLaps([...laps, time]);
    } else {
      resetStop();
    }
  };

  return (
    <>
      <h1 className={styles.title}>Stopwatch</h1>
      <div className={styles.stopwatch}>
        <div className={styles.display}>{formatTime(time)}</div>
        <button className={styles.control} onClick={handleStart}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          className={styles.control}
          disabled={!isRunning && laps.length === 0}
          onClick={handleLab}
        >
          {isRunning ? "Lap" : "Reset"}
        </button>

        <div className={styles.laps}>
          <div className={styles.labTitle}>Laps</div>
          <div className={styles.labTitle}>Time</div>
        </div>
        {laps.map((lap, index) => (
          <div key={index} className={styles.laps}>
            <div className={styles.labIndex}>{index + 1}</div>
            <div className={styles.labTime}>{formatTime(lap)}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Chapter5;
