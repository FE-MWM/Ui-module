import styles from "./Chapter4.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Chapter4 = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleDarkMode = () => {
    const body = document.querySelector("body");
    if (body?.classList.contains("dark")) {
      setIsDarkMode(false);
      body.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      body?.classList.add("dark");
    }
  };

  return (
    <>
      <h1 className={styles.title}>Light / Dark Mode</h1>
      <div className={styles.toggleButton} onClick={handleDarkMode}>
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
