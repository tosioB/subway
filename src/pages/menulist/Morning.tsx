import FoodTab from "@/components/FoodTab";
import SubAnyBanner from "@/components/SubAnyBanner";
import SubHeader from "@/components/SubHeader";
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
      <SubAnyBanner
        backgroundColor="#f2b701"
        backgroundImage="/images/img_morning_bg.png"
        title="Morning Menu"
        description={"아침 메뉴도 Subway와 함께, 취향대로 즐기자"}
        etc={"* 그릴드 랩은 일부 매장에서만 제공 가능합니다."}
        image01Src="/images/morning_sub_any_img01.jpg"
        image02Src="/images/morning_sub_any_img02.jpg"
        image01Style={{
          startTop: "-215px",
          endTop: "0px",
          startRight: "-248px",
          endRight: "-248px",
          transition: "all 0.8s 0.3s",
        }}
        image02Style={{
          startTop: "0px",
          endTop: "0px",
          startLeft: "0px",
          endLeft: "-68px",
          transition: "all 0.8s 0.6s",
        }}
      />
      <FoodTab tabItem={tabItem} />
    </div>
  );
};

export default Morning;
