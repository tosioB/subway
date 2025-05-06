import FoodTab from "@/components/FoodTab";
import SubAnyBanner from "@/components/SubAnyBanner";
import SubHeader from "@/components/SubHeader";
import { smileSubData } from "@/data/smileSubData";
import { TabItem } from "@/types/TabItem";

const tabItem: TabItem[] = [
  { id: 1, tabTitle: "스마일 썹", content: () => smileSubData }
];

const SmileSub = () => {
  return (
    <div className="smile-sub-page menulist-page">
      <SubHeader category="메뉴소개" basicColor="#FFF" activeColor="#ffce32" />
      <SubAnyBanner
        backgroundColor="#00A5DD"
        backgroundImage="/images/img_smile_sub_bg.jpg"
        title="Smile Sub"
        description={
          "웃음이 번지는 착한 가격, 착한 맛!\n스마일 썹과 함께 하루 종일 스마일 하세요~"
        }
        image01Src="/images/sub_any_smile_img_01.png"
        image02Src="/images/sub_any_smile_img_02.png"
        image01Style={{
          startX: 324,
          endX: 224,
          startY: -56,
          endY: -56,
          transition: "all 0.4s 0.6s"
        }}
        image02Style={{
          startX: -816,
          endX: -816,
          startY: -400,
          endY: -192,
          transition: "all 0.4s 0.4s"
        }}
      />
      <FoodTab tabItem={tabItem} />
    </div>
  );
};

export default SmileSub;
