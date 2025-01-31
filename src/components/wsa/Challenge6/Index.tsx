import { useState } from "react";
import useFetchTabsData, { TabData } from "./useFetchTabsData";
import Spinner from "./Spinner";

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState<string>("HTML");
  const { tabsData, isLoading } = useFetchTabsData();

  if (isLoading) return <Spinner />;

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-fuchsia-200 pt-20">
      <div className="text-violet-600 text-4xl mb-10">Tabs</div>
      <div className="w-[800px]">
        <div className="flex justify-between items-center bg-slate-400">
          {tabsData?.map((tab: TabData) => (
            <button
              key={tab.title}
              className={`w-full h-[50px] ${
                tab.title === currentTab ? "bg-white" : ""
              }`}
              onClick={() => setCurrentTab(tab.title)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="bg-white w-full h-auto p-4">
          {tabsData?.map((tab: TabData) => (
            <div
              key={tab.title}
              className={`${tab.title === currentTab ? "block" : "hidden"}`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
