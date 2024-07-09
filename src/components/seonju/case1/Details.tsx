import React from "react";
import { DummyData } from "../../../data/seonju/dummyData";
import styles from "./Details.module.scss";

type PropsData = {
  data: DummyData;
  isOpen: boolean;
  onToggle: () => void;
};

const Details = ({ data, isOpen, onToggle }: PropsData) => {
  const { text, context } = data;

  const handleSummaryClick = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <div className={`${styles.detail} ${isOpen ? styles.open : ""}`}>
      <details open={isOpen}>
        <summary className={styles.summary} onClick={handleSummaryClick}>
          {text}
        </summary>
        <p className={styles.detailText}>{context}</p>
      </details>

      <div className={styles.modal}>
        <div
          className={[styles.status, isOpen ? styles.opened : ""].join(" ")}
          onClick={onToggle}
        >
          {isOpen ? "close" : "open"}
        </div>
        {isOpen && <p className={styles.context}>{context}</p>}
      </div>
    </div>
  );
};

export default Details;
