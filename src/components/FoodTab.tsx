import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { FoodItem } from "@/types/FoodItem";

interface TabItem {
  id: number;
  tabTitle: string;
  content: () => FoodItem[]; // FoodItem 배열을 반환하는 함수
}

interface FoodTabProps {
  tabItem: TabItem[];
}

const FoodTab = ({ tabItem }: FoodTabProps) => {
  const [activeTab, setActiveTab] = useState(tabItem[0]?.id || 1); // 항상 첫 탭으로 시작

  const [filteredData, setFilteredData] = useState(
    tabItem.find((tab) => tab.id === activeTab)?.content() || []
  );

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    setTimeout(() => {
      setFilteredData(
        tabItem.find((tab) => tab.id === activeTab)?.content() || []
      );
      setIsVisible(true);
    }, 300);
  }, [activeTab]);

  return (
    <div className="food-tab">
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
            return <FoodCard key={item.id} item={item} isVisible={isVisible} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodTab;
