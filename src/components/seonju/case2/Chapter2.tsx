import { useRef, useState } from "react";
import Nav from "./Nav";
import Content from "./Content";
import styles from "./Chapter2.module.scss";

const pages = Array.from({ length: 8 }).map((_, i) => i + 1);

const Chapter2 = () => {
  const [viewIndex, setViewIndex] = useState<number>(0);
  const moveToPage = (index: number) => () => {
    console.log("moveToPage", index);
  };
  const contentRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className={styles.app}>
      <Nav pages={pages} viewIndex={viewIndex} moveToPage={moveToPage} />
      <div className={styles.contents}>
        {pages.map((p, i) => (
          <Content key={p} ref={(r) => (contentRef.current[i] = r)} page={p} />
        ))}
      </div>
    </div>
  );
};

export default Chapter2;
