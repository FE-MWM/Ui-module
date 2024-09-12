import { useEffect, useRef, useState } from "react";
import axios, { AxiosError } from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";

interface Res {
    "userId": number;
    "id": number;
    "title": string;
    "body":string;
  }

const InfinityScroll = ()=>{

    const target = useRef<HTMLDivElement>(null);

    const getApi = async (page:number): Promise<any>=>{
       return  await axios.get(`https://jsonplaceholder.typicode.com/posts/${page}`).then((result)=> {
            console.log('res',result)
            //setDatas((pre)=>[...pre, ...res.data])
            return result.data
        }
        )
    };

    const {data, fetchNextPage} = useInfiniteQuery<Res[],AxiosError,Res[][]>({
        queryKey:['inf'],
        queryFn:(param)=> {
            console.log('???', param)
            return axios.get(`https://jsonplaceholder.typicode.com/posts/${param.pageParam || 1}`).then((res)=>res.data)},
        initialPageParam:1,
        getNextPageParam:(last)=> { }

    })
   

    useEffect(()=>{
        const io = new IntersectionObserver(
            (ele)=>{
                if(ele[0].isIntersecting)fetchNextPage();
            }   
        );

        if(target.current)io.observe(target.current);
    
        
        return ()=>io.disconnect();

    },[])


    return(
        <>
           {/* <div>{data?.map((ele)=>{ 
                return(
                    <div key={ele.id}>
                        <p>{ele.title}</p>
                        <p>{ele.body}</p>
                    </div>
                )})}
            </div> */}
            <div ref={target}></div>
        </>
    )
}

export default InfinityScroll