
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import StopWatcher from "./StopWatcher";
import '@testing-library/jest-dom';



/*
    Given : 스톱워치 ui 세팅 00:00:00, 왼쪽 버튼은 start, 오른쪽 버튼은 reset
    When : start 버튼을 누르면 
    Then : 1. 왼쪽 버튼은 stop, 2. 오른쪽 버튼은 lap, 3. 시간은 00:00:99, 00:01:00 이 되는 걸 확인.

    Given : 00:00:00 일 때
    When: reset 버튼을 누르면
    Then: 아무 일도 일어나지 않는다.

    Given : 시간이 측정되고 있을 때
    When: reset 버튼을 누르면
    Then: 시간이 00:00:00 되어야 한다

    Given : 오른쪽 버튼이 lap 일 때
    When: lap 버튼을 누르면
    Then: lap, time 글자와 함께 순위, 시간이 표시되어야 한다

    Given : 왼쪽 버튼이 stop 일 때
    When: stop 버튼을 누르면
    Then: 시간이 변하지 않아야 한다.
*/

beforeEach(()=>render(<StopWatcher/>))

it('스톱워치 ui 렌더',async()=>{
 const startBtn = screen.getByRole('button',{name: /start/i})
 const resettBtn = screen.getByRole('button',{name: /reset/i})
 const timeElement = screen.getByText(/00:00:00/i);
 
 expect(startBtn).toBeInTheDocument();
 expect(resettBtn).toBeInTheDocument();
 expect(timeElement).toBeInTheDocument()


})

it('start 버튼 누르면', ()=>{
    const startBtn = screen.getByRole('button',{name: /start/i})
    const timeElement = screen.getByText(/00:00:00/i);

    fireEvent.click(startBtn);

    waitFor(()=> expect(screen.getByRole('button',{name: /stop/i})).toBeInTheDocument());
    waitFor(()=> expect(screen.getByRole('button',{name: /lap/i})).toBeInTheDocument());
    waitFor(()=> expect(timeElement).toHaveTextContent('00:00:99'));
    waitFor(()=> expect(timeElement).toHaveTextContent('00:01:00'));
    waitFor(()=> expect(timeElement).not.toHaveTextContent('00:00:100'));
    waitFor(()=> expect(timeElement).not.toHaveTextContent('00:60:00'));
    waitFor(()=> expect(timeElement).toHaveTextContent('01:00:00'));

 })