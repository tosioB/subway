import { FoodItem } from "@/types/FoodItem";

export const morningData: FoodItem[] = [
  {
    id: 1,
    category: "morning",
    subCategory: "sandwich",
    korName: "햄, 에그&치즈",
    engName: "Ham, Egg & Cheese",
    image: "/images/morning/sandwich/ham_egg_cheese_sandwich.png",
    description: "푹신한 오믈렛과 햄의 가장 클래식한 조화",
    baseRecipe: ["오믈렛 1장", "햄 2장", "치즈 2장"],
    extraRecipe: ["허니 머스타드", "마요네즈"],
    nutrition: {
      weight: { value: 181 },
      calories: { value: 319 },
      protein: { value: 20.3, dailyPercent: 37 },
      saturatedFat: { value: 3.2, dailyPercent: 22 },
      sugar: { value: 6.5, dailyPercent: 6 },
      sodium: { value: 951, dailyPercent: 48 }
    }
  },
  {
    id: 2,
    category: "morning",
    subCategory: "sandwich",
    korName: "웨스턴, 에그 & 치즈",
    engName: "Western, Egg & Cheese",
    image: "/images/morning/sandwich/western_egg_cheese_sandwich.png",
    description:
      "토마토, 피망, 양파 세가지 야채가 더해져 더욱 신선한 하루 시작",
    baseRecipe: ["오믈렛 1장", "햄 1장", "치즈 2장"],
    extraRecipe: ["NEW 사우스웨스트 치폴레", "핫칠리"],
    nutrition: {
      weight: { value: 208 },
      calories: { value: 315 },
      protein: { value: 18.2, dailyPercent: 33 },
      saturatedFat: { value: 3.1, dailyPercent: 21 },
      sugar: { value: 7.8, dailyPercent: 8 },
      sodium: { value: 849, dailyPercent: 42 }
    }
  },
  {
    id: 3,
    category: "morning",
    subCategory: "wrap",
    korName: "햄, 에그&치즈 랩",
    engName: "Ham, Egg & Cheese Wrap",
    image: "/images/morning/wrap/ham_egg_cheese_wrap.png",
    description:
      "이제 랩으로 즐기세요!\n푹신한 오믈렛과 햄의 가장 클래식한 조화",
    baseRecipe: ["오믈렛 1장", "햄 2장", "치즈 2장"],
    extraRecipe: ["허니 머스타드", "마요네즈"],
    nutrition: {
      weight: { value: 171 },
      calories: { value: 288 },
      protein: { value: 8, dailyPercent: 15 },
      saturatedFat: { value: 1, dailyPercent: 3 },
      sugar: { value: 6 },
      sodium: { value: 667, dailyPercent: 33 }
    }
  },
  {
    id: 4,
    category: "morning",
    subCategory: "wrap",
    korName: "웨스턴, 에그 & 치즈 랩",
    engName: "Western, Egg & Cheese Wrap",
    image: "/images/morning/sandwich/western_egg_cheese_sandwich.png",
    description:
      "이제 랩으로 즐기세요!\n토마토, 피망, 양파 세가지 야채가 더해져 더욱 신선한 하루 시작",
    baseRecipe: ["오믈렛 1장", "햄 1장", "치즈 2장"],
    extraRecipe: ["NEW 사우스웨스트 치폴레", "핫칠리"],
    nutrition: {
      weight: { value: 198 },
      calories: { value: 298 },
      protein: { value: 8, dailyPercent: 15 },
      saturatedFat: { value: 1, dailyPercent: 3 },
      sugar: { value: 7 },
      sodium: { value: 669, dailyPercent: 33 }
    }
  }
];
