import { FoodItem } from "@/types/FoodItem";

export const smileSubData: FoodItem[] = [
  {
    id: 1,
    category: "smile_sub",
    korName: "콘 수프",
    engName: "Corn Soup",
    image: "/images/smile_sub/corn_soup.png",
    description: "달콤한 옥수수의 깊은 풍미가 느껴지는 콘 수프",
    nutrition: [
      {
        weight: { value: "하프_118" }, // 중량
        calories: { value: 81 }, // 열량
        protein: { value: 2.5, dailyPercent: 4.7 }, // 단백질
        saturatedFat: { value: 1.4, dailyPercent: 9.4 }, // 포화지방
        sugar: { value: 5.3 }, // 당류
        sodium: { value: 283, dailyPercent: 14.2 }, // 나트륨
      },
      {
        weight: { value: "레귤러_237" },
        calories: { value: 163 },
        protein: { value: 5.2, dailyPercent: 9.5 },
        saturatedFat: { value: 2.8, dailyPercent: 19 },
        sugar: { value: 10.7 },
        sodium: { value: 569, dailyPercent: 28.4 },
      },
    ],
    detailPage: true,
  },
  {
    id: 2,
    category: "smile_sub",
    korName: "머쉬룸 수프",
    engName: "Mushroom Soup",
    image: "/images/smile_sub/mushroom_soup.png",
    description: "부드러운 머쉬룸의 풍미가 가득한 머쉬룸 수프",
    nutrition: [
      {
        weight: { value: "하프_118" },
        calories: { value: 64 },
        protein: { value: 1.5, dailyPercent: 2.8 },
        saturatedFat: { value: 2.3, dailyPercent: 15.3 },
        sugar: { value: 2.2 },
        sodium: { value: 336, dailyPercent: 17 },
      },
      {
        weight: { value: "레귤러_237" },
        calories: { value: 129 },
        protein: { value: 3.1, dailyPercent: 5.6 },
        saturatedFat: { value: 4.6, dailyPercent: 30.8 },
        sugar: { value: 4.5 },
        sodium: { value: 675, dailyPercent: 34 },
      },
    ],
    detailPage: true,
  },
  {
    id: 3,
    category: "smile_sub",
    korName: "민트 초코",
    engName: "Mint Choco",
    image: "/images/smile_sub/mint_choco.jpg",
    description: "민트의 상쾌함, 초코의 달콤함",
    label: "NEW",
    nutrition: [
      {
        weight: { value: 40 },
        calories: { value: 199 },
        protein: { value: 1.9, dailyPercent: 3.5 },
        saturatedFat: { value: 7, dailyPercent: 47 },
        sugar: { value: 15, dailyPercent: 15 },
        sodium: { value: 125, dailyPercent: 6 },
      },
    ],
    detailPage: true,
  },
  {
    id: 4,
    category: "smile_sub",
    korName: "초코칩",
    engName: "Chocolate Chip",
    image: "/images/smile_sub/chocolate_chip.jpg",
    description: "알알이 가득한 초코의 가장 클래식한 달콤함",
    nutrition: [
      {
        weight: { value: 45 },
        calories: { value: 228 },
        protein: { value: 2.1, dailyPercent: 4 },
        saturatedFat: { value: 5.6, dailyPercent: 37 },
        sugar: { value: 19.3, dailyPercent: 19 },
        sodium: { value: 165, dailyPercent: 8 },
      },
    ],
    detailPage: true,
  },
  {
    id: 5,
    category: "smile_sub",
    korName: "더블 초코칩",
    engName: "Double Chocolate Chip",
    image: "/images/smile_sub/double_chocolate_chip.jpg",
    description:
      "부드러운 화이트초콜릿과 다크 초콜릿의\n절묘한 조화로 더욱 풍부한 달콤함",
    nutrition: [
      {
        weight: { value: 45 },
        calories: { value: 212 },
        protein: { value: 2, dailyPercent: 4 },
        saturatedFat: { value: 5.4, dailyPercent: 36 },
        sugar: { value: 19.9, dailyPercent: 20 },
        sodium: { value: 165, dailyPercent: 8 },
      },
    ],
    detailPage: true,
  },
  {
    id: 6,
    category: "smile_sub",
    korName: "오트밀 레이즌",
    engName: "Oatmeal Raisin",
    image: "/images/smile_sub/oatmeal_raisin.jpg",
    description: "건포도와 귀리에 살짝 더해진\n계피향의 환상적인 조화",
    nutrition: [
      {
        weight: { value: 45 },
        calories: { value: 200 },
        protein: { value: 2.4, dailyPercent: 4 },
        saturatedFat: { value: 3.8, dailyPercent: 25 },
        sugar: { value: 15.8, dailyPercent: 16 },
        sodium: { value: 130, dailyPercent: 7 },
      },
    ],
    detailPage: true,
  },
  {
    id: 7,
    category: "smile_sub",
    korName: "라즈베리 치즈케익",
    engName: "Raspberry Cheese Cake",
    image: "/images/smile_sub/raspberry_cheese_cake.jpg",
    description: "부드럽고 풍부한 치즈와 새콤달콤 라즈베리의\n달콤한 만남",
    nutrition: [
      {
        weight: { value: 45 },
        calories: { value: 204 },
        protein: { value: 2, dailyPercent: 4 },
        saturatedFat: { value: 5, dailyPercent: 33 },
        sugar: { value: 15.8, dailyPercent: 16 },
        sodium: { value: 176, dailyPercent: 9 },
      },
    ],
    detailPage: true,
  },
  {
    id: 8,
    category: "smile_sub",
    korName: "화이트 초코 마카다미아",
    engName: "White Choco Macadamia",
    image: "/images/smile_sub/white_choco_macadamia.jpg",
    description: "고소함 가득한 마카다미아와\n달콤한 화이트 초콜릿의 환상 궁합",
    nutrition: [
      {
        weight: { value: 45 },
        calories: { value: 204 },
        protein: { value: 2, dailyPercent: 4 },
        saturatedFat: { value: 5, dailyPercent: 33 },
        sugar: { value: 15.8, dailyPercent: 16 },
        sodium: { value: 176, dailyPercent: 9 },
      },
    ],
    detailPage: true,
  },
  {
    id: 9,
    category: "smile_sub",
    korName: "웨지 포테이토",
    engName: "Ovenbaked Wedge Potatoes",
    image: "/images/smile_sub/ovenbaked_wedge_potatoes.jpg",
    description: "오븐에 구워 더 담백,\n겉은 바삭 속은 촉촉한 건강한 사이드",
    nutrition: [
      {
        weight: { value: 100 },
        calories: { value: 140 },
        protein: { value: 2.5, dailyPercent: 5 },
        saturatedFat: { value: 1.5, dailyPercent: 10 },
        sugar: { value: 0.7, dailyPercent: 1 },
        sodium: { value: 369, dailyPercent: 18 },
      },
    ],
    detailPage: true,
  },
  {
    id: 10,
    category: "smile_sub",
    korName: "Cheesy 웨지 포테이토",
    engName: "Cheesy Ovenbaked Wedge Potatoes",
    image: "/images/smile_sub/cheesy_ovenbaked_wedge_potatoes.jpg",
    description:
      "치즈 풍미 한가득, 오븐에 구워\n더 담백한 겉은 바삭\n속은 촉촉한 건강한 사이드",
    nutrition: [
      {
        weight: { value: 114 },
        calories: { value: 194 },
        protein: { value: 5.8, dailyPercent: 10 },
        saturatedFat: { value: 3.9, dailyPercent: 26 },
        sugar: { value: 0.8, dailyPercent: 1 },
        sodium: { value: 454, dailyPercent: 23 },
      },
    ],
    detailPage: true,
  },
  {
    id: 11,
    category: "smile_sub",
    korName: "Bacon Cheesy 웨지 포테이토",
    engName: "Bacon Cheesy Ovenbaked Wedge Potatoes",
    image: "/images/smile_sub/bacon_cheesy_ovenbaked_wedge_potatoes.jpg",
    description:
      "짭쪼름한 베이컨과 치즈의 궁합을 더한,\n오븐에 구워 더 담백한 겉은 바삭\n속은 촉촉한 건강한 사이드",
    nutrition: [
      {
        weight: { value: 124 },
        calories: { value: 247 },
        protein: { value: 9.3, dailyPercent: 17 },
        saturatedFat: { value: 5.3, dailyPercent: 35 },
        sugar: { value: 0.9, dailyPercent: 1 },
        sodium: { value: 679, dailyPercent: 34 },
      },
    ],
    detailPage: true,
  },
  {
    id: 12,
    category: "smile_sub",
    korName: "칩",
    engName: "Chip",
    image: "/images/smile_sub/chip.jpg",
    description: "바삭바삭한 칩을 추가해 써브웨이를 즐겨보세요",
    detailPage: false,
  },
  {
    id: 13,
    category: "smile_sub",
    korName: "탄산음료",
    engName: "Soda",
    image: "/images/smile_sub/soda.png",
    description: "-",
    detailPage: false,
  },
  {
    id: 14,
    category: "smile_sub",
    korName: "커피",
    engName: "Coffee",
    image: "/images/smile_sub/coffee.png",
    description: "-",
    detailPage: false,
  },
];
