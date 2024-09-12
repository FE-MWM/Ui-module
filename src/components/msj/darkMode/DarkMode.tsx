import { relative } from "path"
import { useEffect, useState } from "react"

const style = (mode:string)=>{
    switch(mode){
        case 'light' : return 'bg-white text-black'
        case 'dark' : return 'bg-black text-white'
        default : return ''
    }
}


const DarkMode =()=>{

    const [mode, setMode] = useState('')

    const changeMode = (mode:string)=>{
        if(mode ==='light'){
            localStorage.setItem('mode','dark');
            setMode('dark')
        }else if(mode ==='dark'){
            localStorage.setItem('mode','light');
            setMode('light')
        }
    }

    useEffect(()=>{

        const modeType = localStorage.getItem('mode');
        if(modeType){
            setMode(modeType)
        }else{
            setMode('light')
        }

    },[])

    return(
        <div className={`${style(mode)} relative w-[100vw] h-[80vh]`}>
            <button className="absolute top-1/2 left-1/2 -translate-x-50 -translate-y-50 bg-orange-200 p-4" onClick={()=>changeMode(mode)}>{mode}</button>
        </div>
    )
}

export default DarkMode