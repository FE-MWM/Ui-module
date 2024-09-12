import { useEffect, useRef, useState } from "react";

const colors = [
  "bg-red-200", // #f99
  "bg-orange-200", // #fc9
  "bg-yellow-200", // #ff9
  "bg-green-200", // #afa
  "bg-blue-200", // #5cf
  "bg-indigo-200", // #48c
  "bg-purple-200", // #a7a
  "bg-pink-200" // #a9a
];

const nums = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Index() {
  const divArr = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const handleScrollTo = (idx: number) => {
    const el = divArr.current[idx];
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const observerCallbak = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = divArr.current.indexOf(entry.target as HTMLDivElement);
        setActiveIndex(index + 1);
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };

    const observer = new IntersectionObserver(observerCallbak, observerOptions);

    const refs = divArr.current;

    refs.forEach((el) => el && observer.observe(el));

    return () => {
      refs.forEach((el) => el && observer.unobserve(el));
    };
  }, []);
  return (
    <div className="relative">
      <div className="w-full h-[32px] fixed top-0 right-0 left-0 grid grid-cols-8 border-b border-black">
        {nums.map((num) => (
          <button
            key={num}
            className={`w-full h-full ${num !== 8 && "border-r border-black"} ${activeIndex === num ? "bg-gray-500 text-white" : ""}`}
            onClick={() => handleScrollTo(num - 1)}
          >
            {num}
          </button>
        ))}
      </div>
      <div>
        {nums.map((num, index) => (
          <div
            key={num}
            ref={(el) => (divArr.current[index] = el)}
            className={`w-screen h-screen flex justify-center items-center ${colors[num - 1]} font-bold text-8xl`}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}
