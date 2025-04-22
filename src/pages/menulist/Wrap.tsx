import FoodTab from "@/components/FoodTab";
import SubHeader from "@/components/SubHeader";
import SubImgBanner from "@/components/SubImgBanner";
import { wrapData } from "@/data/wrapData";
import { TabItem } from "@/types/TabItem";

const tabItem: TabItem[] = [
  { id: 1, tabTitle: "All", content: () => wrapData },
  {
    id: 2,
    tabTitle: "시그니처",
    content: () => wrapData.filter((item) => item.subCategory === "signature"),
  },
  {
    id: 3,
    tabTitle: "미니랩",
    content: () => wrapData.filter((item) => item.subCategory === "mini"),
  },
];

const Wrap = () => {
  return (
    <div className="wrap-page menulist-page">
      <SubHeader category="메뉴소개" basicColor="#FFF" activeColor="#ffce32" />
      <SubImgBanner />
      <FoodTab tabItem={tabItem} />
    </div>
  );
};

export default Wrap;
