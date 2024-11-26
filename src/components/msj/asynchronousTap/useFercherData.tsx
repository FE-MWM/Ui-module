import { useQuery } from "@tanstack/react-query";
import { fetchTabsData } from "../util/fetchTabsData";

export const useFetcherData = () => {
  return useQuery({
    queryKey: ["fetchData"],
    queryFn: async () => {
      const res = await fetchTabsData();
      if (!res) throw Error("no data");
      return res;
    }
  });
};
