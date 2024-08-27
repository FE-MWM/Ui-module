import React, { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import Content from "./Content";

const pages = Array.from({ length: 8 }).map((_, i) => i + 1);

export default function Index() {
  const [viewIndex, setViewIndex] = useState(0);
  const contentRef = useRef<(HTMLDivElement | null)[]>([]);

  const moveToPage = (i: number) => {
    if (!contentRef.current[i]) return;

    console.log(contentRef.current[i]);

    contentRef.current[i]?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    setViewIndex(i);
  };

  useEffect(() => {
    const scrollSpyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // const index = contentRef.current.indexOf(
            //   entry.target as HTMLDivElement
            // );
            const index = Number(entry.target.innerHTML) - 1;
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

    const currentContentRefs = contentRef.current;

    currentContentRefs.forEach((item) => {
      if (item) {
        scrollSpyObserver.observe(item);
      }
    });

    return () => {
      currentContentRefs.forEach((item) => {
        if (item) {
          scrollSpyObserver.unobserve(item);
        }
      });
    };
  }, []);

  return (
    <div>
      <Nav pages={pages} viewIndex={viewIndex} moveToPage={moveToPage}></Nav>
      <div>
        {pages.map((p, i) => (
          <Content key={p} page={p} ref={(r) => (contentRef.current[i] = r)} />
        ))}
      </div>
    </div>
  );
}
