export const wrapData = [
  {
    id: 1,
    category: "wrap",
    subCategory: "signature",
    korName: "스테이크 & 치즈 아보카도 랩",
    engName: "Steak & Cheese Avocado Wrap",
    image: "/images/wrap/signature/steak_cheese_avocado.jpg",
    description:
      "육즙 가득 스테이크에 프레쉬함을 더해줄\n아보카도와 슈레드치즈 그리고\n모차렐라치즈까지!\n최상의 야채와 소스 조합으로 탄생한\n스테이크 & 치즈 아보카도 랩!",
    label: "NONE",
    baseRecipe: ["스테이크 1스쿱", "아보카도 1스쿱", "슈레드 치즈 1스쿱"],
    extraRecipe: ["마요네즈 1줄"],
    nutrition: {
      weight: { value: 249 }, // 중량
      calories: { value: 478 }, // 열량
      protein: { value: 22.3, dailyPercent: 41 }, // 단백질
      saturatedFat: { value: 9.8, dailyPercent: 65 }, // 포화지방
      sugar: { value: 5.3, dailyPercent: 5 }, // 당류
      sodium: { value: 1009, dailyPercent: 50 } // 나트륨
    }
  },
  {
    id: 2,
    category: "wrap",
    subCategory: "signature",
    korName: "쉬림프 에그마요 랩",
    engName: "Shrimp Egg Mayo Wrap",
    image: "/images/wrap/signature/shrimp_egg_mayo.jpg",
    description:
      "고소한 에그마요와 탱글한 통새우의 만남, 부드럽고 담백한 조화를 즐겨보세요!",
    label: "NONE",
    baseRecipe: ["새우 3마리", "에그마요 2스쿱", "슈레드 치즈 1스쿱"],
    extraRecipe: ["스위트칠리 1줄", "랜치 1줄"],
    nutrition: {
      weight: { value: 253 },
      calories: { value: 516 },
      protein: { value: 20.1, dailyPercent: 29 },
      saturatedFat: { value: 9.5, dailyPercent: 65 },
      sugar: { value: 7.4, dailyPercent: 7 },
      sodium: { value: 1082, dailyPercent: 50 }
    }
  },
  {
    id: 3,
    category: "wrap",
    subCategory: "mini",
    korName: "치킨 베이컨 미니 랩",
    engName: "Chicken Bacon Mini Wrap",
    image: "/images/wrap/mini/chicken_bacon.jpg",
    description:
      "담백한 치킨, 바삭한 베이컨 비츠가\n쫀득한 통밀 랩에 쏘옥!\n치킨 베이컨 미니 랩",
    label: "NONE",
    baseRecipe: ["치킨 스트립 1/2 cut", "베이컨 비츠 10g", "슈레드 치즈 1스쿱"],
    extraRecipe: ["허니 머스타드 1줄", "랜치 1줄"],
    nutrition: {
      weight: { value: 161 },
      calories: { value: 391 },
      protein: { value: 20.8, dailyPercent: 38 },
      saturatedFat: { value: 7.4, dailyPercent: 49 },
      sugar: { value: 5.5, dailyPercent: 5 },
      sodium: { value: 1091, dailyPercent: 55 }
    }
  }
];
