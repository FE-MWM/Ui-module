import React, { useRef } from "react";

interface Props {
  text: string;
  openFunc: () => void;
}

const PopoverItem = ({ text, openFunc }: Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggle = (str: string) => {
    buttonRef.current!.innerText = str;
  };
  return (
    <li className="relative w-full group p-[5px]">
      <p>{text}</p>
      <div
        className="absolute top-1/2 right-[10px] -translate-y-1/2 
      hidden group-hover:block"
      >
        <button
          ref={buttonRef}
          onClick={() => {
            toggle("close");
            openFunc();
          }}
          className="bg-white border border-black	"
        >
          open
        </button>
        <div
          className="absolute hidden popver"
          onClick={(e) => {
            e.currentTarget.classList.remove("display-on");
            toggle("open");
          }}
        >
          popover text..... popover text..... popover text..... popover
          text..... popover text.....popover text..... popover text..... popover
          text.....
        </div>
      </div>
    </li>
  );
};

export default PopoverItem;
