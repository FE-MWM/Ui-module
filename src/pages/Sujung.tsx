import { useState } from "react";
import Popover from "./msjComponent/popover/Popover";

const component = [<></>, <Popover key={1} />];

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
            aria-label={"popover 열기"}
            onClick={() => setModal(1)}
          >
            popover
          </li>
        </ul>
      </main>
    </>
  );
};

export default Sujung;
