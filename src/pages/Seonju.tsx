import { Link } from "react-router-dom";
import styles from "./Seonju.module.scss";

type Chapter = {
  title: string;
  address: string;
};

const Seonju = () => {
  const chapter: Chapter[] = [
    { title: "Chapter1", address: "/seonju/chapter1" },
    { title: "Chapter2", address: "/seonju/chapter2" },
    { title: "Chapter3", address: "/seonju/chapter3" }
  ];

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>SEONJU</h1>
      <div className={styles.buttonList}>
        {chapter.map((item: Chapter, index: number) => (
          <Link to={item.address} key={index}>
            <button className={styles.chapter}>{item.title}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Seonju;
