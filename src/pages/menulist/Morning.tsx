import FoodTab from "@/components/FoodTab";
import SubAnyBanner from "@/components/SubAnyBanner";
import SubHeader from "@/components/SubHeader";
import { morningData } from "@/data/morningData";
import { TabItem } from "@/types/TabItem";
import "@/assets/menulist-page.scss";

const tabItem: TabItem[] = [
  { id: 1, tabTitle: "All", content: () => morningData },
  {
    id: 2,
    tabTitle: "샌드위치",
    content: () => morningData.filter((item) => item.subCategory === "sandwich")
  },
  {
    id: 3,
    tabTitle: "랩",
    content: () => morningData.filter((item) => item.subCategory === "wrap")
  }
];

const Morning = () => {
  return (
    <div className="morning-page menulist-page">
      <SubHeader
        category="메뉴소개"
        basicColor="#FFF"
        activeColor="#ffce32"
        borderColor="rgba(229, 229, 229, 0.1)"
      />
      <SubAnyBanner
        backgroundColor="#f2b701"
        backgroundImage="/images/img_morning_bg.png"
        title="Morning Menu"
        description={"아침 메뉴도 Subway와 함께, 취향대로 즐기자"}
        etc={"* 그릴드 랩은 일부 매장에서만 제공 가능합니다."}
        image01Src="/images/sub_any_morning_img_01.jpg"
        image02Src="/images/sub_any_morning_img_02.jpg"
        image01Style={{
          startX: 356,
          endX: 356,
          startY: -400,
          endY: -192,
          transition: "all 0.4s 0.6s"
        }}
        image02Style={{
          startX: -610,
          endX: -710,
          startY: -190,
          endY: -190,
          transition: "all 0.4s 0.4s"
        }}
      />
      <FoodTab tabItem={tabItem} />
    </div>
  );
};

export default Morning;
