import { render, waitFor } from "@testing-library/react"
import DarkMode from "./DarkMode";

beforeAll(()=>{
 Storage.prototype.getItem = jest.fn()
})

describe('다크모드 테스트', ()=>{
// 컴포넌트 렌더
const darkMode = render(<DarkMode/>);

it('로컬스토리지에 저장되어 있는 테마를 기준으로 초기 렌더링한다',async()=>{
    
   //mode라는 인자와 함께 호출되지않음.
   //expect(localStorage.getItem).not.toHaveBeenCalledWith('mode')

   //mode라는 인자와 함께 호출됨.
   waitFor(()=>expect(localStorage.getItem).toHaveBeenCalledWith('mode'));
   
   //렌더한 컴포넌트에서 mode를 포함하는 글자 찾기.
   //expect(darkMode.getByText(/mode/i))
})

it('로컬스토리지에 저장된 테마가 없다면 라이트 모드로 초기 렌더링한다', async()=>{
    if(!localStorage.getItem('mode')){
        //렌더한 컴포넌트에서 light 글자 찾기.
        waitFor(()=>expect(darkMode.getByText(/light/i)))
    }
})

it('토글 버튼을 클릭하면 로컬스토리지에 테마를 저장하고 저장된 테마를 기준으로 다시 렌더링한다', ()=>{
    expect(darkMode.getByRole('button'))
})
})