import FoodTab from "@/components/FoodTab";
import SubAnyBanner from "@/components/SubAnyBanner";
import SubHeader from "@/components/SubHeader";
import { smileSubData } from "@/data/smileSubData";
import { TabItem } from "@/types/TabItem";

const tabItem: TabItem[] = [
  { id: 1, tabTitle: "스마일 썹", content: () => smileSubData },
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
        image01Src="/images/smile_sub_any_img01.png"
        image02Src="/images/smile_sub_any_img02.png"
        image01Style={{
          startBottom: "-140px",
          endBottom: "-140px",
          startRight: "-400px",
          endRight: "-290px",
          transition: "all 0.8s 0.3s",
        }}
        image02Style={{
          startTop: "-300px",
          endTop: "0px",
          startLeft: "-180px",
          endLeft: "-180px",
          transition: "all 0.8s 0.6s",
        }}
      />
      <FoodTab tabItem={tabItem} />
    </div>
  );
};

export default SmileSub;
