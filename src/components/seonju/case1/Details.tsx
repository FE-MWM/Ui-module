import { DummyData } from "../../../data/seonju/dummyData";
import styles from "./Details.module.scss";

const Details = ({ data }: { data: DummyData }) => {
  const { text, context } = data;

  return (
    <details className={styles.detail}>
      <summary className={styles.summary}>{text}</summary>
      <p className={styles.context}>{context}</p>
    </details>
  );
};

export default Details;
