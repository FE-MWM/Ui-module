import Chapter1 from "../components/seonju/case1/Chapter1";
import Home from "../pages/Home";
import Seonju from "../pages/Seonju";
import Shinae from "../pages/Shinae";
import Sujung from "../pages/Sujung";
import React from "react";

type Routes = {
  path: string;
  element: React.JSX.Element;
};

const routes: Routes[] = [
  { path: "/", element: <Home /> },
  { path: "/msj", element: <Sujung /> },
  { path: "/wsa", element: <Shinae /> },
  { path: "/seonju", element: <Seonju /> },

  // Seonju
  { path: "/seonju/chapter1", element: <Chapter1 /> }

  // Shinae
];

export default routes;
