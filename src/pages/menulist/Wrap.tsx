import FoodTab from "@/components/FoodTab";
import SubAnyBanner from "@/components/SubAnyBanner";
import SubHeader from "@/components/SubHeader";
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
      <SubAnyBanner
        backgroundColor="#85c441"
        title="Wrap"
        description={
          "Subway를 더 맛있고 간편하게 즐기는 방법\n최상의 레시피로 만들어진 써브웨이 랩 시리즈, 이젠 고민하지 마세요!"
        }
        etc={
          "* 그릴드 랩은 일부 매장에서만 제공 가능합니다.\n* 그릴드 랩을 제공하는 매장에서는 시그니처랩을 제공하지 않습니다.매장찾기의 매장정보를 확인해주세요."
        }
        image01Src="/images/wrap_sub_any_img01.jpg"
        image02Src="/images/wrap_sub_any_img02.jpg"
        image01Style={{
          startX: 250,
          endX: 338,
          startY: -116,
          endY: -116,
          transition: "all 0.4s 0.4s",
        }}
        image02Style={{
          startX: -810,
          endX: -810,
          startY: -454,
          endY: -190,
          transition: "all 0.4s 0.6s",
        }}
      />
      <FoodTab tabItem={tabItem} />
    </div>
  );
};

export default Wrap;
