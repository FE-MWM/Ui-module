import { useEffect, useState } from "react";
import { dummyFetcher } from "./util";
import getList from "./listBuilder";
import List from "./List";
import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
import useInfiniteScroll from "./useInfiniteScroll";

export type ItemType = {
  id: string;
  no: number;
  text: string;
};

const Chapter3 = () => {
  const [list, setList] = useState<ItemType[]>([]);

  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isError
  } = useInfiniteQuery<ItemType[], Error>({
    queryKey: ["list"],
    queryFn: async ({ pageParam = 0 }: QueryFunctionContext) => {
      return await dummyFetcher(getList, pageParam);
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length : undefined;
    },
    initialPageParam: 0
  });

  useEffect(() => {
    if (data) {
      setList(data.pages.flat());
    }
  }, [data]);

  const loadMoreRef = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isLoading: isFetchingNextPage
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      <List list={list} />
      <div ref={loadMoreRef} />
    </div>
  );
};

export default Chapter3;
