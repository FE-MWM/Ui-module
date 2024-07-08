import React, { useRef } from "react";
import { DummyData } from "../../../data/seonju/dummyData";

interface Props {
  isOpen: boolean;
  openFunc: () => void;
  closeFunc: () => void;
  liData: DummyData;
}

const PopoverItemNew = ({ isOpen, openFunc, closeFunc, liData }: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const style = isOpen ? `block` : `hidden`;

  return (
    <li
      className={`relative w-full group p-[5px] cursor-pointer z-[1]`}
      onClick={isOpen ? closeFunc : openFunc}
    >
      <p>{liData.text}</p>
      <div
        className={`absolute top-1/2 right-[10px] -translate-y-1/2 
        ${style} group-hover:block`}
      >
        <button ref={buttonRef} className="bg-white border border-black	">
          {isOpen ? "close" : "open"}
        </button>
        <div
          className={`absolute ${style} w-[300px] bg-white border z-[2] p-[8px]`}
        >
          {liData.context}
        </div>
      </div>
    </li>
  );
};

export default PopoverItemNew;
