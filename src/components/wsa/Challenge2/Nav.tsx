import React from "react";

type propsData = {
  pages: number[];
  viewIndex: number;
  moveToPage: (i: number) => void;
};

export default function Nav({ pages, viewIndex, moveToPage }: propsData) {
  return (
    <ul className="w-full h-[32px] fixed top-0 right-0 left-0 grid grid-cols-8 border-b border-black">
      {pages.map((p, i) => (
        <li
          key={p}
          className={`w-full h-full ${p !== 8 && "border-r border-black"}`}
        >
          <button
            className={`w-full h-full ${viewIndex === i && "bg-gray-500 text-white"} font-bold`}
            onClick={() => moveToPage(i)}
          >
            {p}
          </button>
        </li>
      ))}
    </ul>
  );
}
