import React, { forwardRef } from "react";

type Props = {
  page: number;
};

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

const Content = forwardRef<HTMLDivElement, Props>(({ page }, ref) => (
  <div
    ref={ref}
    className={`w-screen h-screen flex justify-center items-center ${colors[page - 1]} font-bold text-8xl`}
  >
    {page}
  </div>
));

Content.displayName = "Content";

export default Content;
