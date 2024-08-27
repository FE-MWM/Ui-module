import React from "react";
import { render } from "@testing-library/react";
import { SpyScroll } from "../SpyScroll";
test("test", () => {
  const mockObserveFn = () => {
    return {
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn()
    };
  };

  window.IntersectionObserver = jest.fn().mockImplementation(mockObserveFn);

  const main = render(
    <SpyScroll idName="test">
      [<div key={0} style={{ width: "100vw" }} />]
    </SpyScroll>
  );

  expect(IntersectionObserver).toHaveBeenCalled();
});
