import { useState } from "react";
import Popover from "../components/msj/popover/Popover";
import { SpyScroll } from "../components/msj/spyScroll/SpyScroll";
import { SpyScrollContent2 } from "../components/msj/spyScroll/component/SpyScrollContent2";
import { SpyScrollContent1 } from "../components/msj/spyScroll/component/SpyScrollContent1";
import { SpyScrollContent3 } from "../components/msj/spyScroll/component/SpyScrollContent3";
import { SpyScrollContent4 } from "../components/msj/spyScroll/component/SpyScrollContent4";
import { SpyScrollContent5 } from "../components/msj/spyScroll/component/SpyScrollContent5";

const component = [
  <></>,
  <Popover key={1} />,
  <SpyScroll key={2} idName="wrap">
    <SpyScrollContent1 />
    <SpyScrollContent2 />
    <SpyScrollContent3 />
    <SpyScrollContent4 />
    <SpyScrollContent5 />
  </SpyScroll>
];

const Sujung = () => {
  const [modal, setModal] = useState(0);
  return (
    <>
      {modal ? (
        <div>
          <button aria-label={"모달 닫기"} onClick={() => setModal(0)}>
            닫기
          </button>
          {component[modal]}
        </div>
      ) : (
        <></>
      )}
      <main>
        <h1>수정 페이지~!</h1>
        <ul aria-labelledby="UI component 목록">
          <li
            role="button"
            aria-label={"popover ui 열기"}
            onClick={() => setModal(1)}
          >
            popover
          </li>
          <li
            role="button"
            aria-label={"spy scroll ui 열기"}
            onClick={() => setModal(2)}
          >
            spy-scroll
          </li>
        </ul>
      </main>
    </>
  );
};

export default Sujung;
