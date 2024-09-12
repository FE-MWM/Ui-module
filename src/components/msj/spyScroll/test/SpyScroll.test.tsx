
import { act, render, waitFor } from "@testing-library/react";
import InfinityScroll from "../../infinity/InfinityScroll";
import { renderWithQueryClient } from "../../testUtil";
test("intersection observer 준비",async() => {
  
  const mockObserveFn = () => {
    return {
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn()
    };
  };

  window.IntersectionObserver = jest.fn().mockImplementation(mockObserveFn);


  renderWithQueryClient(<InfinityScroll />)
  

  expect(IntersectionObserver).toHaveBeenCalled();


  // await waitFor(() => {
  //   const child = render(<></>);
  //   expect(child).toHaveLength(0)
  // });

  const child = render(<>item</>);
  expect(child.getAllByText('item').length).toEqual(1)

  act(()=>{})
  
});

