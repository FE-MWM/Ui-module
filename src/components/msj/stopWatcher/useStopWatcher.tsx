import { useState } from "react"

export const useStopWatcher = ()=>{

const [time,setTime] = useState('00:00:00')
const [run,setRun] = useState<undefined|NodeJS.Timer>(undefined)

const starter = ()=> setRun(setInterval(()=>setTime((pre)=>pre+1),500));

const stoper = ()=>clearInterval(run)

return{time, starter,stoper}

}