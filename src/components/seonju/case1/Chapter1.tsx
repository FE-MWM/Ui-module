import dummyData from "../../../data/seonju/dummyData";
import Details from "./Details";
import styles from "./Chapter1.module.scss";
import { useState } from "react";

const Chapter1 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className={styles.dataList}>
      {dummyData.map((item, index) => (
        <div key={index} className={styles.element}>
          <Details
            data={item}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        </div>
      ))}
    </section>
  );
};

export default Chapter1;
