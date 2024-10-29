import { useRef, useState } from "react";
import {
  numberArrToStringTime,
  stringTimeToNumberArr
} from "../util/timerTrans";

export const useStopWatcher = () => {
  const [time, setTime] = useState("00:00:00");
  const run = useRef<undefined | number>(undefined);

  const timerFunc = (time: string) => {
    const timeArr = stringTimeToNumberArr(time);
    const newTime = numberArrToStringTime(timeArr);
    setTime(newTime);
    run.current = window.setTimeout(() => timerFunc(newTime), 100);
  };

  const starter = () =>
    (run.current = window.setTimeout(() => timerFunc(time), 100));

  const stoper = () => window.clearTimeout(run.current);

  return { time, starter, stoper };
};

/*
[Typescript] setTimeout의 타입은? 'Timeout'일까 'number'일까
[출처]https://blog.naver.com/altmshfkgudtjr/222199638254?trackingCode=rss

1. tsconfig.json에 type이라는 필드가 존재하는데, 거기에 "node"가 포함되었는가?
2. setTimeout을 선언할 때, window. 를 붙여주었는가?

타입스크립트는 타입추론을 기본적으로 진핸한다. 그런데 window.setTimeout이 아닌, setTimeout 적게된다면, NodeJS.Timer을 반환하게된다. 그렇기에 정말 심플하게 해결하기 위해서는 any 타입을 써도되지만(하지만 typescript를 쓰는 이유가 사라지게됨), 습관적으로 timer 메소드앞에는 window.를 붙여주도록 하자.
[출처] [Typescript] setTimeout의 타입은? 'Timeout'일까 'number'일까|작성자 NB

*/
