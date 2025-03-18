import { useEffect, useState } from "react";
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
    subCategory?: string;
  }[];
}

interface GoodsTabProps {
  tabItem: TabItem[];
}

const GoodsTab = ({ tabItem }: GoodsTabProps) => {
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
                isVisible={isVisible}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GoodsTab;
