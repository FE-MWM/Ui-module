import { useCallback, useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import Content from "./Content";
import styles from "./Chapter2.module.scss";

const pages = Array.from({ length: 8 }).map((_, i) => i + 1);

const Chapter2 = () => {
  const [viewIndex, setViewIndex] = useState<number>(0);
  const contentRef = useRef<(HTMLDivElement | null)[]>([]);
  const moveToPage = (index: number) => () => {
    contentRef.current[index]?.scrollIntoView({ behavior: "smooth" });
    setViewIndex(index);
  };

  const createObserver = useCallback(() => {
    return new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = contentRef.current.indexOf(
              entry.target as HTMLDivElement
            );
            setViewIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
      }
    );
  }, []);

  useEffect(() => {
    const observer = createObserver();
    const currentContentRefs = contentRef.current;
    currentContentRefs.forEach((item) => {
      if (item) observer.observe(item);
    });
    return () => {
      currentContentRefs.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, [createObserver]);

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
