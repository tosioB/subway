import { useState } from "react";

interface TabData {
  label: string;
  content: React.ReactNode;
}

interface ComTabProps {
  tabs: TabData[];
  defaultIndex?: number;
}

const ComTab = ({ tabs, defaultIndex = 0 }: ComTabProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className="com-tab">
      <div className="tab-btn-wrap">
        {tabs.map((tab, idx) => (
          <button
            type="button"
            key={idx}
            className={activeIndex === idx ? "active" : ""}
            onClick={() => setActiveIndex(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-con-wrap">{tabs[activeIndex].content}</div>
    </div>
  );
};

export default ComTab;
