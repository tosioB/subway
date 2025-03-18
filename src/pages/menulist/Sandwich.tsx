import GoodsTab from "@/components/GoodsTab";
import SubHeader from "@/components/SubHeader";
import SubImgBanner from "@/components/SubImgBanner";
import { sandwichData } from "@/data/sandwichData";
import { toppingData } from "@/data/toppingData";

const tabItem = [
  { id: 1, tabTitle: "All", content: () => sandwichData },
  {
    id: 2,
    tabTitle: "클래식",
    content: () => sandwichData.filter((item) => item.subCategory === "classic")
  },
  {
    id: 3,
    tabTitle: "프레쉬&라이트",
    content: () => sandwichData.filter((item) => item.subCategory === "fresh")
  },
  {
    id: 4,
    tabTitle: "프리미엄",
    content: () => sandwichData.filter((item) => item.subCategory === "premium")
  },
  {
    id: 5,
    tabTitle: "신제품",
    content: () => sandwichData.filter((item) => item.subCategory === "new")
  },
  {
    id: 6,
    tabTitle: "추가 선택",
    content: () => toppingData
  }
];

const Sandwich = () => {
  return (
    <div className="sandwich-page menulist-page">
      <SubHeader category="메뉴소개" basicColor="#FFF" activeColor="#ffce32" />
      <SubImgBanner />
      <GoodsTab tabItem={tabItem} />
    </div>
  );
};

export default Sandwich;
