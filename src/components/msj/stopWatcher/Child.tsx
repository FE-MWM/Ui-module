import React from "react";
import { useImperativeHandle } from "react";
import { useStopWatcher } from "./useStopWatcher";

const Child = React.forwardRef((props, ref) => {
  const { time, starter, stoper } = useStopWatcher();

  useImperativeHandle(ref, () => ({
    starter,
    stoper // 부모가 호출할 수 있도록 setChildState 전달
  }));

  return (
    <div>
      <h2>자식 상태: {time}</h2>
    </div>
  );
});

Child.displayName = "Child";

export default Child;
