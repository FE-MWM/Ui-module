import { useEffect, useRef, useState } from "react";
import { fetchData, User } from "./api";

export default function Index() {
  const [list, setList] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [target, setTarget] = useState<HTMLLIElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const getData = async (page: number) => {
    const data = await fetchData(page);
    setList((prevList) => [...prevList, ...data.results]);
  };

  useEffect(() => {
    getData(page);
  }, [page]);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      {
        threshold: 1.0
      }
    );

    if (target) {
      observer.current.observe(target);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [target]);

  return (
    <div className="w-full h-full">
      <ul>
        {list.map((item, i) => (
          <li
            key={i}
            ref={list.length - 1 === i ? setTarget : null}
            className="flex border-b border-black"
          >
            <div className="w-[50px] flex justify-center items-center border-r border-black">
              {i + 1}
            </div>
            <div className="p-2">
              <div>{`name : ${item.name.first} ${item.name.last}`}</div>
              <div>{`gender : ${item.gender}`}</div>
              <div>{`email : ${item.email}`}</div>
              <div>{`phone : ${item.phone}`}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
