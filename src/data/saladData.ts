import { FoodItem } from "@/types/FoodItem";

export const saladData: FoodItem[] = [
  {
    id: 1,
    category: "salad",
    subCategory: "premium",
    korName: "안창 비프",
    engName: "Beef",
    image: "/images/salad/premium/beef.png",
    description:
      "안창살을 써브웨의만의 이국적인 특제 시즈닝을 더해 더 부드럽고, 더 풍미있게 즐기는 프리미엄 샐러드",
    label: "SUBPICK",
    baseRecipe: ["안창 비프", "아메리칸 치즈"],
    extraRecipe: ["야채 5종", "올리브", "스위트 칠리", "랜치"],
    nutrition: {
      weight: { value: 342 },
      calories: { value: 180 },
      protein: { value: 15, dailyPercent: 27 },
      saturatedFat: { value: 4, dailyPercent: 25 },
      sugar: { value: 8 },
      sodium: { value: 588, dailyPercent: 29 }
    },
    detailPage: true
  },
  {
    id: 2,
    category: "salad",
    subCategory: "premium",
    korName: "안창 비프&머쉬룸",
    engName: "Beef & Mushroom",
    image: "/images/salad/premium/beef_mushroom.png",
    description:
      "부드럽고 풍미 넘치는 안창살과 담백하고 건강한 머쉬룸이 함께 어우러져 이루는 맛있는 조합의 샐러드",
    label: "SUBPICK",
    baseRecipe: ["안창 비프", "머쉬룸", "아메리칸 치즈"],
    extraRecipe: ["야채 5종", "스위트 어니언", "랜치"],
    nutrition: {
      weight: { value: 342 },
      calories: { value: 130 },
      protein: { value: 10, dailyPercent: 18 },
      saturatedFat: { value: 2, dailyPercent: 13 },
      sugar: { value: 8 },
      sodium: { value: 356, dailyPercent: 18 }
    },
    detailPage: true
  },
  {
    id: 3,
    category: "salad",
    subCategory: "premium",
    korName: "머쉬룸",
    engName: "Mushroom",
    image: "/images/salad/premium/beef_mushroom.png",
    description:
      "버섯의 건강함을 그대로 담아 신선한 야채와 함께 담백하게 즐기는 샐러드",
    label: "SUBPICK",
    baseRecipe: ["머쉬룸", "아메리칸 치즈"],
    extraRecipe: ["야채 5종", "랜치", "후추"],
    nutrition: {
      weight: { value: 342 },
      calories: { value: 83 },
      protein: { value: 5.1, dailyPercent: 9 },
      saturatedFat: { value: 0.1, dailyPercent: 1 },
      sugar: { value: 7.3 },
      sodium: { value: 133, dailyPercent: 7 }
    },
    detailPage: true
  },
  {
    id: 4,
    category: "salad",
    subCategory: "fresh",
    korName: "터키 베이컨 아보카도",
    engName: "Turkey Bacon Avocado",
    image: "/images/salad/fresh/turkey_bacon_avocado.png",
    description:
      "강하고 담백한 오리지날 터키에 베이컨과 아보카도로 풍미가득 맛도 가득",
    label: "SUBPICK",
    baseRecipe: [
      "터키 3장",
      "베이컨 비츠 10g",
      "아보카도 1스쿱",
      "모짜렐라 치즈"
    ],
    extraRecipe: ["야채 5종", "마요네즈", "스위트 어니언"],
    nutrition: {
      weight: { value: 354 },
      calories: { value: 200 },
      protein: { value: 13.7, dailyPercent: 24 },
      saturatedFat: { value: 2.5, dailyPercent: 17 },
      sugar: { value: 8.6, dailyPercent: 9 },
      sodium: { value: 721, dailyPercent: 36 }
    },
    detailPage: true
  },
  {
    id: 5,
    category: "salad",
    subCategory: "premium",
    korName: "써브웨이 클럽",
    engName: "Subway Club",
    image: "/images/salad/premium/subway_club.png",
    description:
      "고소한 베이컨, 담백한 터키에 햄까지 더해 완벽해진 조화를 즐겨보세요.",
    label: "SUBPICK",
    baseRecipe: ["터키 2장", "햄 1장", "베이컨 2장", "슈레드 치즈"],
    extraRecipe: ["야채 4종", "올리브", "랜치", "홀스래디쉬"],
    nutrition: {
      weight: { value: 324 },
      calories: { value: 144 },
      protein: { value: 13.3, dailyPercent: 24 },
      saturatedFat: { value: 1.8, dailyPercent: 12 },
      sugar: { value: 8.1, dailyPercent: 8 },
      sodium: { value: 634, dailyPercent: 32 }
    },
    detailPage: true
  },
  {
    id: 6,
    category: "salad",
    subCategory: "fresh",
    korName: "터키",
    engName: "Turkey",
    image: "/images/salad/fresh/turkey.png",
    description: "건강하고 담백한 오리지날 터키 샐러드",
    label: "SUBPICK",
    baseRecipe: ["터키 4장", "아메리칸 치즈"],
    extraRecipe: ["야채 5종", "올리브", "마요네즈", "사우스웨스트 치폴레"],
    nutrition: {
      weight: { value: 328 },
      calories: { value: 103 },
      protein: { value: 11.9, dailyPercent: 21 },
      saturatedFat: { value: 0.4, dailyPercent: 3 },
      sugar: { value: 8.3, dailyPercent: 8 },
      sodium: { value: 509, dailyPercent: 25 }
    },
    detailPage: true
  },
  {
    id: 7,
    category: "salad",
    subCategory: "premium",
    korName: "스테이크 & 치즈",
    engName: "Steak & Cheese",
    image: "/images/salad/premium/steak_cheese.png",
    description: "건강하고 담백한 오리지날 터키 샐러드",
    label: "SUBPICK",
    baseRecipe: ["스테이크 1스쿱", "아메리칸 치즈"],
    extraRecipe: [
      "야채 5종",
      "올리브",
      "피클",
      "할라피뇨",
      "마요네즈",
      "사우스웨스트 치폴레"
    ],
    nutrition: {
      weight: { value: 352 },
      calories: { value: 193 },
      protein: { value: 21.4, dailyPercent: 39 },
      saturatedFat: { value: 3.7, dailyPercent: 25 },
      sugar: { value: 8.4, dailyPercent: 8 },
      sodium: { value: 538, dailyPercent: 27 }
    },
    detailPage: true
  },
  {
    id: 8,
    category: "salad",
    subCategory: "premium",
    korName: "스파이시 쉬림프",
    engName: "Spicy Shrimp",
    image: "/images/salad/premium/spicy_shrimp.png",
    description:
      "탱글한 쉬림프에 이국적인 시즈닝을 더해 색다른 매콤함을 만나보세요!",
    label: "SUBPICK",
    baseRecipe: ["스파이시 쉬림프 5마리", "아메리칸 치즈"],
    extraRecipe: ["야채 4종", "올리브", "마요네즈", "홀스래디쉬"],
    nutrition: {
      weight: { value: 321 },
      calories: { value: 83 },
      protein: { value: 9.8, dailyPercent: 18 },
      saturatedFat: { value: 0.4, dailyPercent: 3 },
      sugar: { value: 8.7, dailyPercent: 9 },
      sodium: { value: 328, dailyPercent: 16 }
    },
    detailPage: true
  },
  {
    id: 9,
    category: "salad",
    subCategory: "premium",
    korName: "쉬림프",
    engName: "Shrimp",
    image: "/images/salad/premium/shrimp.png",
    description:
      "탱글한 쉬림프 5마리가 그대로, 신선하고 담백한 쉬림프의 맛 그대로 즐겨보세요!",
    label: "SUBPICK",
    baseRecipe: ["새우 5마리", "슈레드 치즈"],
    extraRecipe: ["야채 4종", "올리브", "스위트 칠리", "랜치"],
    nutrition: {
      weight: { value: 316 },
      calories: { value: 79 },
      protein: { value: 9.6, dailyPercent: 17 },
      saturatedFat: { value: 0.1, dailyPercent: 1 },
      sugar: { value: 7.5, dailyPercent: 7 },
      sodium: { value: 173, dailyPercent: 9 }
    },
    detailPage: true
  },
  {
    id: 10,
    category: "salad",
    subCategory: "fresh",
    korName: "로스트 치킨",
    engName: "Roasted Chicken",
    image: "/images/salad/fresh/roasted_chicken.png",
    description: "오븐에 구워 담백한 저칼로리 닭가슴살의 건강한 풍미",
    label: "SUBPICK",
    baseRecipe: ["치킨 브레스트 1장", "슈레드 치즈"],
    extraRecipe: ["야채 5종", "허니 머스타드", "올리브오일"],
    nutrition: {
      weight: { value: 344 },
      calories: { value: 138 },
      protein: { value: 19.3, dailyPercent: 35 },
      saturatedFat: { value: 0.8, dailyPercent: 6 },
      sugar: { value: 8.3, dailyPercent: 8 },
      sodium: { value: 363, dailyPercent: 18 }
    },
    detailPage: true
  },
  {
    id: 11,
    category: "salad",
    subCategory: "fresh",
    korName: "로티세리 바비큐 치킨",
    engName: "Rotisserie Barbecue Chicken",
    image: "/images/salad/fresh/rotisserie_barbecue_chicken.png",
    description:
      "촉촉한 바비큐 치킨의 풍미가득.\n손으로 찢어 더욱 부드러운 치킨의 혁명",
    label: "SUBPICK",
    baseRecipe: ["로티세리 치킨 1스쿱", "아메리칸 치즈"],
    extraRecipe: ["야채 5종", "스위트 칠리", "랜치"],
    nutrition: {
      weight: { value: 356 },
      calories: { value: 165 },
      protein: { value: 22.4, dailyPercent: 41 },
      saturatedFat: { value: 2, dailyPercent: 14 },
      sugar: { value: 7.4, dailyPercent: 7 },
      sodium: { value: 299, dailyPercent: 15 }
    },
    detailPage: true
  },
  {
    id: 12,
    category: "salad",
    subCategory: "premium",
    korName: "풀드포크 바비큐",
    engName: "Pulled Pork Barbecue",
    image: "/images/salad/premium/pulled_pork_barbecue.png",
    description: "미국 스타일의 풀드포크 바비큐가 가득 들어간 샌드위치",
    label: "SUBPICK",
    baseRecipe: ["풀드포크 1스쿱", "아메리칸 치즈"],
    extraRecipe: ["야채 5종", "랜치", "스모크 바비큐"],
    nutrition: {
      weight: { value: 342 },
      calories: { value: 165 },
      protein: { value: 18.1, dailyPercent: 33 },
      saturatedFat: { value: 1.6, dailyPercent: 10 },
      sugar: { value: 7.4, dailyPercent: 7 },
      sodium: { value: 446, dailyPercent: 22 }
    },
    detailPage: true
  },
  {
    id: 13,
    category: "salad",
    subCategory: "premium",
    korName: "치킨 데리야끼",
    engName: "Chicken Teriyaki",
    image: "/images/salad/premium/chicken_teriyaki.png",
    description:
      "담백한 치킨 스트립에 달콤짭쪼름한 써브웨이 특제 데리야끼 소스와의 환상적인 만남",
    label: "SUBPICK",
    baseRecipe: ["치킨 데리야끼 1스쿱", "아메리칸 치즈"],
    extraRecipe: ["야채 4종", "올리브", "마요네즈", "홀스래디쉬"],
    nutrition: {
      weight: { value: 362 },
      calories: { value: 152 },
      protein: { value: 19.8, dailyPercent: 36 },
      saturatedFat: { value: 0.7, dailyPercent: 5 },
      sugar: { value: 9.7, dailyPercent: 10 },
      sodium: { value: 455, dailyPercent: 23 }
    },
    detailPage: true
  },
  {
    id: 14,
    category: "salad",
    subCategory: "premium",
    korName: "스파이시 이탈리안",
    engName: "Spicy Italian",
    image: "/images/salad/premium/spicy_italian.png",
    description:
      "페퍼로니 & 살라미가 입안 가득, 페퍼로니의 부드러운 매콤함을 만나보세요!",
    label: "SUBPICK",
    baseRecipe: ["페페로니 5장", "살라미 5장", "슈레드 치즈"],
    extraRecipe: ["야채 5종", "스위트 어니언", "랜치"],
    nutrition: {
      weight: { value: 331 },
      calories: { value: 302 },
      protein: { value: 14, dailyPercent: 25 },
      saturatedFat: { value: 8.6, dailyPercent: 57 },
      sugar: { value: 8.3, dailyPercent: 8 },
      sodium: { value: 1008, dailyPercent: 50 }
    },
    detailPage: true
  },
  {
    id: 15,
    category: "salad",
    subCategory: "classic",
    korName: "이탈리안 비엠티",
    engName: "Italian B.M.T™",
    image: "/images/salad/classic/Italian_B.M.T.png",
    description:
      "페퍼로니, 살라미 그리고 햄이 만들어내는 최상의 조화!\n전세계가 사랑하는 써브웨이의 베스트셀러!\nBiggest Meatiest Tastiest, its’ B.M.T. 샐러드",
    label: "SUBPICK",
    baseRecipe: ["페페로니 3장", "살라미 3장", "햄 2장", "모짜렐라 치즈"],
    extraRecipe: [
      "야채 5종",
      "올리브",
      "피클",
      "할라피뇨",
      "스위트 어니언",
      "랜치"
    ],
    nutrition: {
      weight: { value: 335 },
      calories: { value: 226 },
      protein: { value: 14.3, dailyPercent: 26 },
      saturatedFat: { value: 5.4, dailyPercent: 36 },
      sugar: { value: 8.2, dailyPercent: 8 },
      sodium: { value: 822, dailyPercent: 41 }
    },
    detailPage: true
  },
  {
    id: 16,
    category: "salad",
    subCategory: "classic",
    korName: "비엘티",
    engName: "B.L.T.",
    image: "/images/salad/classic/B.L.T.png",
    description: "오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그대로~",
    label: "SUBPICK",
    baseRecipe: ["베이컨 비츠 20g", "모짜렐라 치즈"],
    extraRecipe: ["야채 5종", "랜치", "사우스웨스트 치폴레"],
    nutrition: {
      weight: { value: 291 },
      calories: { value: 153 },
      protein: { value: 9.5, dailyPercent: 17 },
      saturatedFat: { value: 2.9, dailyPercent: 19 },
      sugar: { value: 7.6, dailyPercent: 8 },
      sodium: { value: 470, dailyPercent: 23 }
    },
    detailPage: true
  },
  {
    id: 17,
    category: "salad",
    subCategory: "classic",
    korName: "참치",
    engName: "Tuna",
    image: "/images/salad/classic/tuna.png",
    description:
      "남녀노소 누구나 좋아하는 담백한 참치와 고소한 마요네즈의 완벽한 조화",
    label: "SUBPICK",
    baseRecipe: ["참치 2스쿱", "슈레드 치즈"],
    extraRecipe: ["야채 5종", "스위트 칠리", "랜치"],
    nutrition: {
      weight: { value: 346 },
      calories: { value: 153 },
      protein: { value: 20.1, dailyPercent: 37 },
      saturatedFat: { value: 0.9, dailyPercent: 6 },
      sugar: { value: 7.3, dailyPercent: 7 },
      sodium: { value: 292, dailyPercent: 15 }
    },
    detailPage: true
  },
  {
    id: 18,
    category: "salad",
    subCategory: "classic",
    korName: "햄",
    engName: "Ham",
    image: "/images/salad/classic/ham.png",
    description: "풍부한 햄이 만들어내는 담백함을 입 안 가득 즐겨보세요!",
    label: "SUBPICK",
    baseRecipe: ["햄 4장", "모짜렐라 치즈"],
    extraRecipe: ["야채 5종", "올리브", "피클", "마요네즈", "홀스래디쉬"],
    nutrition: {
      weight: { value: 327 },
      calories: { value: 99.5 },
      protein: { value: 12.3, dailyPercent: 22 },
      saturatedFat: { value: 0.5, dailyPercent: 3 },
      sugar: { value: 8, dailyPercent: 8 },
      sodium: { value: 438, dailyPercent: 22 }
    },
    detailPage: true
  },
  {
    id: 19,
    category: "salad",
    subCategory: "classic",
    korName: "에그마요",
    engName: "Egg Mayo",
    image: "/images/salad/classic/egg_mayo.png",
    description:
      "부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러",
    label: "SUBPICK",
    baseRecipe: ["에그마요 2스쿱", "슈레드 치즈"],
    extraRecipe: ["야채 5종", "스위트 칠리", "랜치"],
    nutrition: {
      weight: { value: 346 },
      calories: { value: 254 },
      protein: { value: 9.7, dailyPercent: 18 },
      saturatedFat: { value: 4.3, dailyPercent: 29 },
      sugar: { value: 7.3, dailyPercent: 7 },
      sodium: { value: 312, dailyPercent: 16 }
    },
    detailPage: true
  },
  {
    id: 20,
    category: "salad",
    subCategory: "fresh",
    korName: "에그 슬라이스",
    engName: "Egg Slice",
    image: "/images/salad/fresh/egg_slice.png",
    description:
      "달걀의 신선함과 담백함을 그대로 담아 맛도, 영양도 사로잡은 샐러드를 만나보세요.",
    label: "SUBPICK",
    baseRecipe: ["에그 1개(슬라이스)", "모짜렐라 치즈"],
    extraRecipe: ["야채 5종", "올리브", "스위트 칠리", "랜치"],
    nutrition: {
      weight: { value: 312 },
      calories: { value: 117 },
      protein: { value: 8.5, dailyPercent: 15 },
      saturatedFat: { value: 1.8, dailyPercent: 12 },
      sugar: { value: 7.2, dailyPercent: 7.2 },
      sodium: { value: 205, dailyPercent: 10 }
    },
    detailPage: true
  },
  {
    id: 21,
    category: "salad",
    subCategory: "fresh",
    korName: "베지",
    engName: "Veggie Delite™",
    image: "/images/salad/fresh/veggie_delite.png",
    description:
      "달걀의 신선함과 담백함을 그대로 담아 맛도, 영양도 사로잡은 샐러드를 만나보세요.",
    label: "SUBPICK",
    baseRecipe: ["아메리칸 치즈"],
    extraRecipe: ["야채 5종", "엑스트라 버진 올리브 오일", "레드 와인 식초"],
    nutrition: {
      weight: { value: 271 },
      calories: { value: 46.7 },
      protein: { value: 2.5, dailyPercent: 5 },
      saturatedFat: { value: 0.1, dailyPercent: 1 },
      sugar: { value: 7.2, dailyPercent: 7 },
      sodium: { value: 19.7, dailyPercent: 1 }
    },
    detailPage: true
  },
  {
    id: 22,
    category: "salad",
    subCategory: "topping",
    korName: "미트 추가",
    engName: "Meet",
    image: "/images/topping/meat.png",
    description: "주 재료를 2배로 더 푸짐하게 즐기세요",
    price15cm: 3000,
    price30cm: 6000,
    detailPage: false
  },
  {
    id: 23,
    category: "salad",
    subCategory: "topping",
    korName: "에그마요",
    engName: "Egg Mayo",
    image: "/images/topping/egg_mayo.png",
    description: "고소한 마요네즈의 만남",
    price15cm: 2000,
    price30cm: 4000,
    detailPage: false
  },
  {
    id: 24,
    category: "salad",
    subCategory: "topping",
    korName: "베이컨",
    engName: "Bacon",
    image: "/images/topping/bacon.png",
    description: "진한 풍미와 바삭한 베이컨으로\n특별한 나만의 써브웨이~",
    price15cm: 1500,
    price30cm: 3000,
    detailPage: false,
    etc: "※ 샌드위치와 샐러드 메뉴에 기본으로\n제공되는 베이컨은 샌드위치(베이컨),\n샐러드(베이컨 비츠)로 제공됩니다."
  },
  {
    id: 25,
    category: "salad",
    subCategory: "topping",
    korName: "치즈 추가",
    engName: "Cheese",
    image: "/images/topping/cheese.jpg",
    description: "고소한 치즈를 2배로!",
    price15cm: 1400,
    price30cm: 2800,
    detailPage: false
  },
  {
    id: 26,
    category: "salad",
    subCategory: "topping",
    korName: "에그 슬라이스",
    engName: "Egg Slice",
    image: "/images/topping/egg_slice.png",
    description: "신선한 달걀의 담백함을 추가해,\n더 든든하게 즐겨보세요.",
    price15cm: 1200,
    price30cm: 2400,
    detailPage: false
  },
  {
    id: 27,
    category: "salad",
    subCategory: "topping",
    korName: "아보카도",
    engName: "Avocado",
    image: "/images/topping/avocado.png",
    description: "숲속의 버터 아보카도로 영양 UP",
    price15cm: 1500,
    price30cm: 3000,
    detailPage: false
  },
  {
    id: 28,
    category: "salad",
    subCategory: "topping",
    korName: "오믈렛",
    engName: "Omelet",
    image: "/images/topping/omelet.png",
    description: "더 부드럽게, 더 고소하게",
    price15cm: 1800,
    price30cm: 3600,
    detailPage: false
  },
  {
    id: 29,
    category: "salad",
    subCategory: "topping",
    korName: "페퍼로니",
    engName: "Pepperoni",
    image: "/images/topping/pepperoni.jpg",
    description: "입맛 당기는 페퍼로니로\n써브웨이를 더 맛있게!",
    price15cm: 1500,
    price30cm: 3000,
    detailPage: false
  },
  {
    id: 30,
    category: "salad",
    subCategory: "topping",
    korName: "베이컨 비츠",
    engName: "Bacon Bits",
    image: "/images/topping/bacon_bits.png",
    description: "짭쪼름한 베이컨 비츠로 맛의 화룡점정을!",
    price15cm: 1500,
    price30cm: 3000,
    detailPage: false,
    etc: "※ 샌드위치와 샐러드 메뉴에 기본으로\n제공되는 베이컨은 샌드위치(베이컨),\n샐러드(베이컨 비츠)로 제공됩니다."
  },
  {
    id: 31,
    category: "salad",
    subCategory: "new",
    korName: "미니 로티세리 치킨 샐러드",
    engName: "Mini Rotisserie Chicken Salad",
    image: "/images/salad/new/mini_rotisserie_chicken_salad.png",
    description:
      "신선함과 간편함을 한 컵에 담아, 가볍고 건강하게 즐기는 미니 샐러드",
    label: "NEW",
    nutrition: {
      weight: { value: 94 },
      calories: { value: 42 },
      protein: { value: 5.3, dailyPercent: 9.7 },
      saturatedFat: { value: 0.6, dailyPercent: 3.3 },
      sugar: { value: 3 },
      sodium: { value: 72, dailyPercent: 3.6 }
    },
    detailPage: true
  }
];
