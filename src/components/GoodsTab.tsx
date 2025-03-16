import { useState } from "react";
import GoodsCard from "./GoodsCard";

interface TabItem {
  id: number;
  tabTitle: string;
  content: () => {
    id: number;
    image: string;
    korName: string;
    engName: string;
    description: string;
    subCategory?: string; // 있을 수도 있고 없을 수도 있음
  }[];
}

interface GoodsTabProps {
  tabItem: TabItem[];
}

const GoodsTab = ({ tabItem }: GoodsTabProps) => {
  const [activeTab, setActiveTab] = useState(tabItem[0]?.id || 1);
  const filteredData =
    tabItem.find((tab) => tab.id === activeTab)?.content() || [];

  return (
    <div className="goods-tab">
      <div className="container">
        <div className="tab-btn-wrap">
          {tabItem.map((tab) => (
            <button
              type="button"
              key={tab.id}
              className={activeTab === tab.id ? "active" : ""}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.tabTitle}
            </button>
          ))}
        </div>
        <div className="tab-con-wrap">
          {filteredData.map((item) => {
            return (
              <GoodsCard
                key={item.id}
                image={item.image}
                korName={item.korName}
                engName={item.engName}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GoodsTab;
