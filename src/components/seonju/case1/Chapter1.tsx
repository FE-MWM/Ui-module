import dummyData from "../../../data/seonju/dummyData";
import Details from "./Details";
import styles from "./Chapter1.module.scss";

const Chapter1 = () => {
  return (
    <section className={styles.dataList}>
      {dummyData.map((item, index) => (
        <div key={index} className={styles.element}>
          <Details data={item} />
        </div>
      ))}
    </section>
  );
};

export default Chapter1;
