import styles from "./Chapter5.module.scss";

const Chapter5 = () => {
  return (
    <>
      <h1 className={styles.title}>Stopwatch</h1>
      <div className={styles.stopwatch}>
        <div className={styles.display}>00:00:00</div>
        <button className={styles.control}>Start</button>
        <button className={styles.control} disabled>
          Reset
        </button>

        <div className={styles.laps}>
          <div className={styles.labTitle}>Laps</div>
          <div className={styles.labTitle}>Time</div>
        </div>
      </div>
    </>
  );
};

export default Chapter5;
