import React from "react";
import { useParams } from "react-router-dom";
import Chapter1 from "../components/wsa/chapter1/index";
import Chapter2 from "../components/wsa/chapter2/index";

type Params = {
  id: string;
};

export default function DetailPageShinae() {
  const { id } = useParams<Params>();
  let Component: React.ComponentType | null = null;

  if (id === "1") {
    Component = Chapter1;
  } else if (id === "2") {
    Component = Chapter2;
  }

  return (
    <div className="">
      <div> {Component ? <Component /> : <></>}</div>
    </div>
  );
}
