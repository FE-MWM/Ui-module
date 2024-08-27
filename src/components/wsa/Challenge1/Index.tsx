import React, { useState } from "react";
import lists from "./dummyData";

export default function Index() {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    if (openedIndex === index) {
      setOpenedIndex(null);
    } else {
      setOpenedIndex(index);
    }
  };
  return (
    <div className="w-screen h-screen p-[20px]">
      {lists.map((list, index) => (
        <div
          className="relative border-b border-black p-2 group"
          key={list.text}
          onClick={() => handleItemClick(index)}
        >
          <div className="grid grid-cols-[20px,1fr]">
            <div>{openedIndex === index ? "▼" : "▶︎"}</div>
            <div>{list.text}</div>
          </div>
          <div
            className={`absolute right-0 top-[10px] w-[50px] h-auto text-center border border-black bg-white ${openedIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
          >
            {openedIndex === index ? "close" : "open"}
          </div>
          {openedIndex === index && (
            <div className="z-50 absolute right-0 top-[37px] w-[360px] h-auto border border-black bg-white p-2">
              {list.context}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
