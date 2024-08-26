import { useEffect, useState } from "react";
import { dummyFetcher } from "./util";
import getList from "./listBuilder";
import List from "./List";

export type ItemType = {
  id: string;
  no: number;
  text: string;
};

const Chapter3 = () => {
  const [page, setPage] = useState<number>(0);
  const [list, setList] = useState<ItemType[]>([]);

  useEffect(() => {
    const fetchList = async () => {
      const list = await dummyFetcher(getList, page);
      setList(list);
    };

    fetchList();
  }, [page]);

  return (
    <div>
      <List list={list} />
    </div>
  );
};

export default Chapter3;
