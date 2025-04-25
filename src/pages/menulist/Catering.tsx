import FoodTab from "@/components/FoodTab";
import SubHeader from "@/components/SubHeader";
import SubImgBanner from "@/components/SubImgBanner";
import { cateringData } from "@/data/cateringData";
import { TabItem } from "@/types/TabItem";

const tabItem: TabItem[] = [
  { id: 1, tabTitle: "All", content: () => cateringData },
  {
    id: 2,
    tabTitle: "샌드위치",
    content: () =>
      cateringData.filter((item) => item.subCategory === "sandwich"),
  },
  {
    id: 3,
    tabTitle: "쿠키",
    content: () => cateringData.filter((item) => item.subCategory === "cookie"),
  },
];

const Catering = () => {
  return (
    <div className="catering-page">
      <SubHeader category="메뉴소개" basicColor="#FFF" activeColor="#ffce32" />
      <SubImgBanner />
      <FoodTab tabItem={tabItem} />
    </div>
  );
};

export default Catering;
