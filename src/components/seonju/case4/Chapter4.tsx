import styles from "./Chapter4.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Chapter4 = () => {
  return (
    <>
      <h1 className={styles.title}>Light / Dark Mode</h1>
      <div className={styles.toggleButton}>
        <div className={styles.toggleButtonSwitch}></div>
        <div className={styles.toggleButtonText}>
          <div className={styles.toggleButtonTextOn}>
            <FontAwesomeIcon icon={faSun} />
          </div>
          <div className={styles.toggleButtonTextOff}>
            <FontAwesomeIcon icon={faMoon} />
          </div>
        </div>
      </div>
      <article>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum optio
        ab porro magni in sunt ipsam, doloremque minima, itaque sapiente
        consequatur, repellat velit voluptatum accusantium aperiam. Nostrum sunt
        reprehenderit nemo!
      </article>
    </>
  );
};

export default Chapter4;
