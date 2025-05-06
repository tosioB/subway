import FoodTab from "@/components/FoodTab";
import SubHeader from "@/components/SubHeader";
import SubImgBanner from "@/components/SubImgBanner";
import { saladData } from "@/data/saladData";
import { TabItem } from "@/types/TabItem";

const tabItem: TabItem[] = [
  { id: 1, tabTitle: "All", content: () => saladData },
  {
    id: 2,
    tabTitle: "클래식",
    content: () => saladData.filter((item) => item.subCategory === "classic")
  },
  {
    id: 3,
    tabTitle: "프레쉬&라이트",
    content: () => saladData.filter((item) => item.subCategory === "fresh")
  },
  {
    id: 4,
    tabTitle: "프리미엄",
    content: () => saladData.filter((item) => item.subCategory === "premium")
  },
  {
    id: 5,
    tabTitle: "신제품",
    content: () => saladData.filter((item) => item.subCategory === "new")
  },
  {
    id: 6,
    tabTitle: "추가 선택",
    content: () => saladData.filter((item) => item.subCategory === "topping")
  }
];

const Salad = () => {
  return (
    <div className="salad-page menulist-page">
      <SubHeader
        category="메뉴소개"
        basicColor="#FFF"
        activeColor="#ffce32"
        borderColor="rgba(229, 229, 229, 0.1)"
      />
      <SubImgBanner
        backgroundColor="#009223"
        backgroundImage="/images/img_subpick_bg.jpg"
      />
      <FoodTab tabItem={tabItem} />
    </div>
  );
};

export default Salad;
