import FoodTab from "@/components/FoodTab";
import SubAnyBanner from "@/components/SubAnyBanner";
import SubHeader from "@/components/SubHeader";
import { freshIngredientsData } from "@/data/freshIngredientsData";
import { TabItem } from "@/types/TabItem";

const tabItem: TabItem[] = [
  { id: 1, tabTitle: "All", content: () => freshIngredientsData },
  {
    id: 2,
    tabTitle: "빵",
    content: () =>
      freshIngredientsData.filter((item) => item.subCategory === "bread")
  },
  {
    id: 3,
    tabTitle: "야채",
    content: () =>
      freshIngredientsData.filter((item) => item.subCategory === "vegetable")
  },
  {
    id: 4,
    tabTitle: "치즈",
    content: () =>
      freshIngredientsData.filter((item) => item.subCategory === "cheese")
  },
  {
    id: 5,
    tabTitle: "소스",
    content: () =>
      freshIngredientsData.filter((item) => item.subCategory === "sauce")
  }
];

const FreshIngredients = () => {
  return (
    <div className="fresh-ingredients-page guide-page">
      <SubHeader
        category="이용방법"
        basicColor="#FFF"
        activeColor="#ffce32"
        borderColor="rgba(229, 229, 229, 0.1)"
      />
      <SubAnyBanner
        backgroundColor="#07a5e6"
        title="Fresh Ingredients"
        description={
          "매장에서 직접 굽는 빵, 엄격하게 세척하는 야채의 신선함,\n써브웨이만의 다양한 소스를 맛보세요."
        }
        image01Src="/images/sub_any_fresh_ingredients_img_01.jpg"
        image02Src="/images/sub_any_fresh_ingredients_img_02.jpg"
        image03Src="/images/sub_any_fresh_ingredients_img_03.jpg"
        image01Style={{
          startX: 362,
          endX: 362,
          startY: -190,
          endY: -190,
          transition: "all 0.4s 0.4s"
        }}
        image02Style={{
          startX: -630,
          endX: -630,
          startY: 100,
          endY: -120,
          transition: "all 0.4s 0.6s"
        }}
        image03Style={{
          startX: -465,
          endX: -465,
          startY: 100,
          endY: -26,
          transition: "all 0.4s 0.8s"
        }}
      />
      <FoodTab tabItem={tabItem} />
    </div>
  );
};

export default FreshIngredients;
