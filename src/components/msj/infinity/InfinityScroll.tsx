import { useEffect, useRef, useState } from "react";
import axios from "axios";

interface Res {
    "userId": number;
    "id": number;
    "title": string;
    "body":string;
  }

const InfinityScroll = ()=>{

    const target = useRef<HTMLDivElement>(null);

    const [page, setPage] = useState(1);
    const [datas, setDatas] = useState<Res[]>([]);

    const getApi = (page:number)=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${page}`).then((res)=>
            console.log('res',res)
            //setDatas((pre)=>[...pre, ...res.data])
        )
    };

    useEffect(()=>{
        const io = new IntersectionObserver(
            (ele)=>{
                if(ele[0].isIntersecting){getApi(page);};
            }   
        );

        if(target.current)io.observe(target.current);
    
        
        return ()=>io.disconnect();

    },[])


    return(
        <>
           <div>{datas.map((ele)=>{ 
                return(
                    <div key={ele.id}>
                        <p>{ele.title}</p>
                        <p>{ele.body}</p>
                    </div>
                )})}
            </div>
            <div ref={target}></div>
        </>
    )
}

export default InfinityScroll