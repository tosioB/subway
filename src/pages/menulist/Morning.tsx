import FoodTab from "@/components/FoodTab";
import SubHeader from "@/components/SubHeader";
import SubImgBanner from "@/components/SubImgBanner";
import { morningData } from "@/data/morningData";
import { TabItem } from "@/types/TabItem";

const tabItem: TabItem[] = [
  { id: 1, tabTitle: "All", content: () => morningData },
  {
    id: 2,
    tabTitle: "샌드위치",
    content: () =>
      morningData.filter((item) => item.subCategory === "sandwich"),
  },
  {
    id: 3,
    tabTitle: "랩",
    content: () => morningData.filter((item) => item.subCategory === "wrap"),
  },
];

const Morning = () => {
  return (
    <div className="morning-page menulist-page">
      <SubHeader category="메뉴소개" basicColor="#FFF" activeColor="#ffce32" />
      <SubImgBanner />
      <FoodTab tabItem={tabItem} />
    </div>
  );
};

export default Morning;
