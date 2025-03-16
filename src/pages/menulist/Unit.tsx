import GoodsTab from "@/components/GoodsTab";
import SubHeader from "@/components/SubHeader";
import SubImgBanner from "@/components/SubImgBanner";
import { wrapData } from "@/data/wrapData";

const tabItem = [
  { id: 1, tabTitle: "All", content: () => wrapData },
  {
    id: 2,
    tabTitle: "시그니처 랩",
    content: () => wrapData.filter((item) => item.subCategory === "signature")
  },
  {
    id: 3,
    tabTitle: "미니 랩",
    content: () => wrapData.filter((item) => item.subCategory === "mini")
  }
];

const Unit = () => {
  return (
    <div className="unit-page  menulist-page">
      <SubHeader category="메뉴소개" activeColor="#ffce32" />
      <SubImgBanner />
      <GoodsTab tabItem={tabItem} />
    </div>
  );
};

export default Unit;
