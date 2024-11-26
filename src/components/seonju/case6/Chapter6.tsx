import { useEffect, useState } from "react";
import styles from "./Chapter6.module.scss";
import { useQuery } from "@tanstack/react-query";
import { ClipLoader } from "react-spinners";

type Tab = {
  title: string;
  content: string;
};

const fetchTabData = async (): Promise<Tab[]> => {
  try {
    const res = await new Promise<Response>((resolve, reject) => {
      setTimeout(() => {
        fetch("/chapterSix.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          method: "GET"
        })
          .then(resolve)
          .catch(reject);
      }, 2000);
    });

    if (!res.ok) {
      throw new Error(`Fetching error: ${res.status} ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    return [];
  }
};

const Chapter6 = () => {
  const [activeTab, setActiveTab] = useState<string>("");
  const [tabList, setTabList] = useState<string[]>([]);

  const { data, isLoading, error } = useQuery<Tab[], Error>({
    queryKey: ["tabList"],
    queryFn: fetchTabData
  });

  useEffect(() => {
    if (data) {
      const tabTitle = data.map((tab) => {
        return tab.title;
      });
      setTabList(tabTitle);
      setActiveTab(tabTitle[0]);
    }
  }, [data]);

  if (isLoading) {
    return <ClipLoader />;
  }

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <h1 className={styles.title}>TAB</h1>
      <div className={styles.container}>
        <ul className={styles.tabList}>
          {tabList.map((item) => {
            return (
              <li
                className={`${styles.tabItem} ${
                  activeTab === item ? styles.active : ""
                }`}
                key={item}
                onClick={() => handleTabClick(item)}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <div className={styles.content}>
          {data?.find((tab) => tab.title === activeTab)?.content}
        </div>
      </div>
    </>
  );
};

export default Chapter6;
