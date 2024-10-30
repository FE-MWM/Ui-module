import Chapter1 from "../components/seonju/case1/Chapter1";
import Home from "../pages/Home";
import Seonju from "../pages/Seonju";
import Shinae from "../pages/Shinae";
import Challenge1 from "../components/wsa/Challenge1/Index";
import Challenge2 from "../components/wsa/Challenge2/Index";
import Challenge2Origin from "../components/wsa/Challenge2_Origin/Index";
import Challenge3 from "../components/wsa/Challenge3/Index";
import Sujung from "../pages/Sujung";
import React from "react";
import Chapter2 from "../components/seonju/case2/Chapter2";
import Chapter3 from "../components/seonju/case3/Chapter3";
import Chapter4 from "../components/seonju/case4/Chapter4";
import Chapter5 from "../components/seonju/case5/Chapter5";

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
  { path: "/seonju/chapter1", element: <Chapter1 /> },
  { path: "/seonju/chapter2", element: <Chapter2 /> },
  { path: "/seonju/chapter3", element: <Chapter3 /> },
  { path: "/seonju/chapter4", element: <Chapter4 /> },
  { path: "/seonju/chapter5", element: <Chapter5 /> },

  // Shinae
  { path: "/wsa/challenge1", element: <Challenge1 /> },
  { path: "/wsa/challenge2", element: <Challenge2 /> },
  { path: "/wsa/challenge2_origin", element: <Challenge2Origin /> },
  { path: "/wsa/challenge3", element: <Challenge3 /> }
];

export default routes;
