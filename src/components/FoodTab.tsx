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
  const storedTab = localStorage.getItem("activeTab");
  const initialTab = storedTab ? Number(storedTab) : tabItem[0]?.id || 1;
  const [activeTab, setActiveTab] = useState(initialTab);
  const [filteredData, setFilteredData] = useState(
    tabItem.find((tab) => tab.id === activeTab)?.content() || []
  );
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false); // 기존 카드 숨기기
    setTimeout(() => {
      setFilteredData(
        tabItem.find((tab) => tab.id === activeTab)?.content() || []
      );
      setIsVisible(true); // 새로운 카드 표시
    }, 300); // 기존 카드 애니메이션이 끝난 후 변경
  }, [activeTab]);

  // activeTab 변경 시 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("activeTab", String(activeTab));
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
