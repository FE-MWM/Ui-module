import { useRef, useState } from "react";
import Child from "./Child";

const StopWatcher = ()=>{
        const [btnType, setBtnType] = useState('start')
        const childRef = useRef<{starter:()=>void, stoper:()=>void}>();
    
        const changeChildState = () => {
            if (!childRef.current) return
            
            if(btnType ==='start'){
                childRef.current.starter();
                setBtnType('stop')
            }else if(btnType ==='stop'){
                childRef.current.stoper();
                setBtnType('start')
            }
        };
    
        return (
            <div>
                <h1>부모 컴포넌트</h1>
                <button onClick={changeChildState}>{btnType}</button>
                <Child ref={childRef} />
            </div>
        );
}

export default StopWatcher