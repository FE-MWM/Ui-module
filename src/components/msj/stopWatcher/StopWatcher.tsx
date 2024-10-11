import { useRef, useState } from "react";
import Child from "./Child";

const StopWatcher = ()=>{
        const [leftBtn, setLeftBtn] = useState('start')
        const [rightBtn, setRightBtn] = useState('reset')
        const childRef = useRef<{starter:()=>void, stoper:()=>void}>();
    
        const handleTimer = () => {
            if (!childRef.current) return
            
            if(leftBtn ==='start'){
                childRef.current.starter();
                setLeftBtn('stop')
            }else if(leftBtn ==='stop'){
                childRef.current.stoper();
                setLeftBtn('start')
            }
        };

        const handleOtherFunc = ()=>{
            if(rightBtn ==='reset'){
                setRightBtn('lap')
            }else if(rightBtn ==='lap'){
                setRightBtn('reset')
            }
        }
    
        return (
            <div>
                <h1>부모 컴포넌트</h1>
                <Child ref={childRef} />
                <button onClick={handleTimer}>{leftBtn}</button>
                <button onClick={handleOtherFunc}>{rightBtn}</button>
            </div>
        );
}

export default StopWatcher