import FoodTab from "@/components/FoodTab";
import SubAnyBanner from "@/components/SubAnyBanner";
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
      cateringData.filter((item) => item.subCategory === "sandwich")
  },
  {
    id: 3,
    tabTitle: "쿠키",
    content: () => cateringData.filter((item) => item.subCategory === "cookie")
  }
];

const Catering = () => {
  return (
    <div className="catering-page">
      <SubHeader category="메뉴소개" basicColor="#FFF" activeColor="#ffce32" />
      <SubAnyBanner
        backgroundColor="#fa8306"
        title="Catering Menu"
        description={"특별한 순간을 더욱 특별하게 해줄 단체 매뉴를 소개합니다."}
        etc={"※ 최소 1일전 매장에 주문해주세요"}
        image01Src="/images/sub_any_catering_img01.png"
        image02Src="/images/sub_any_catering_img02.png"
        image01Style={{
          startX: 570,
          endX: 310,
          startY: -149,
          endY: -149,
          transition: "all 0.4s 0.4s"
        }}
        image02Style={{
          startX: -767,
          endX: -767,
          startY: -700,
          endY: -190,
          transition: "all 0.4s 0.6s"
        }}
      />
      <FoodTab tabItem={tabItem} />
    </div>
  );
};

export default Catering;
