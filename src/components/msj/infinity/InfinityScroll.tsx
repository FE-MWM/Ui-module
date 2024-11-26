import { useEffect, useRef } from "react";
import axios from "axios";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

interface Quote {
  id: number;
  quote: string;
  author: string;
}
interface Res {
  quotes: Quote[];
  total: number;
  skip: number;
  limit: number;
}

const InfinityScroll = () => {
  const target = useRef<HTMLDivElement>(null);

  const getApi = async (page: number): Promise<any> => {
    return await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${page}`)
      .then((result) => {
        console.log("res", result);
        //setDatas((pre)=>[...pre, ...res.data])
        return result.data;
      });
  };

  const { data, fetchNextPage } = useInfiniteQuery<
    Res,
    Error,
    InfiniteData<Res>,
    string[],
    number
  >({
    queryKey: ["inf"],
    queryFn: ({ pageParam = 1 }) => {
      return axios
        .get(
          `https://dummyjson.com/quotes?limit=20&skip=${(pageParam - 1) * 20}`
        )
        .then((res) => res.data);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.quotes.length >= lastPage.total) {
        return undefined;
      }
      return allPages.length + 1;
    }
  });

  useEffect(() => {
    const io = new IntersectionObserver((ele) => {
      console.log(ele[0].isIntersecting);
      if (ele[0].isIntersecting) {
        fetchNextPage();
        console.log("true and fetch");
      }
    });

    if (target.current) io.observe(target.current);

    return () => io.disconnect();
  }, []);

  console.log(data);

  return (
    <>
      <div className="w-full">
        {data?.pages.map((page) =>
          page.quotes.map((item) => {
            return (
              <div key={item.id} className="mb-[25px]">
                {item.quote}
              </div>
            );
          })
        )}
      </div>

      <div ref={target} className="w-full h-[10px] bg-black"></div>
    </>
  );
};

export default InfinityScroll;
