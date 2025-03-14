export const sandwiches = [
  {
    id: 1,
    category: "sandwiches",
    subCategory: "premium",
    korName: "안창 비프&머쉬룸",
    engName: "Beef & Mushroom",
    image: "/images/sandwiches/premium/beef_mushroom.png",
    description:
      "부드럽고 풍미 넘치는 안창살과 담백하고 건강한 머쉬룸이 함께 어우러져 이루는 맛있는 조합의 샌드위치",
    subPick: true,
    baseRecipe: ["위트", "안창 비프", "머쉬룸", "아메리칸 치즈"],
    extraRecipe: ["야채 5종", "스위트 어니언", "랜치"],
    nutrition: {
      weight: { value: 235 }, // 중량
      calories: { value: 292 }, // 열량
      protein: { value: 16.5, dailyPercent: 30 }, // 단백질
      saturatedFat: { value: 2.5, dailyPercent: 16 }, // 포화지방
      sugar: { value: 8 }, // 당류
      sodium: { value: 598, dailyPercent: 30 } // 나트륨
    }
  },
  {
    id: 2,
    category: "sandwiches",
    subCategory: "premium",
    korName: "스테이크 & 치즈",
    engName: "Steak & Cheese",
    image: "/images/sandwiches/premium/steak_n_cheese.png",
    description: "육즙이 쫙~풍부한 비프 스테이크의 풍미가 입안 한가득",
    subPick: true,
    baseRecipe: ["화이트", "스테이크 1스쿱", "아메리칸 치즈"],
    extraRecipe: [
      "야채 5종",
      "올리브",
      "피클",
      "할라피뇨",
      "마요네즈",
      "사우스웨스트 치폴레"
    ],
    nutrition: {
      weight: { value: 245 },
      calories: { value: 355 },
      protein: { value: 28.1, dailyPercent: 51 },
      saturatedFat: { value: 4.2, dailyPercent: 28 },
      sugar: { value: 8.8, dailyPercent: 9 },
      sodium: { value: 780, dailyPercent: 39 }
    }
  },
  {
    id: 3,
    category: "sandwiches",
    subCategory: "classic",
    korName: "이탈리안 비엠티",
    engName: "Italian B.M.T.™",
    image: "/images/sandwiches/classic/Italian_B.M.T.png",
    description:
      "페퍼로니, 살라미 그리고 햄이 만들어내는 최상의 조화!\n전세계가 사랑하는 써브웨이의 베스트셀러!\nBiggest Meatiest Tastiest, its’ B.M.T.",
    subPick: true,
    baseRecipe: [
      "파마산 오레가노",
      "페퍼로니 3장",
      "살라미 3장",
      "햄 2장",
      "모짜렐라 치즈"
    ],
    extraRecipe: [
      "야채 5종",
      "올리브",
      "피클",
      "할라피뇨",
      "스위트 어니언",
      "랜치"
    ],
    nutrition: {
      weight: { value: 223 },
      calories: { value: 388 },
      protein: { value: 21, dailyPercent: 38 },
      saturatedFat: { value: 5.9, dailyPercent: 39 },
      sugar: { value: 8.6, dailyPercent: 9 },
      sodium: { value: 1064, dailyPercent: 53 }
    }
  },
  {
    id: 4,
    category: "sandwiches",
    subCategory: "Fresh & Light",
    korName: "로티세리 바비큐 치킨",
    engName: "Rotisserie Barbecue Chicken",
    image: "/images/sandwiches/fresh/rotisserie_barbecue_chicken.png",
    description:
      "촉촉한 바비큐 치킨의 풍미가득.\n손으로 찢어 더욱 부드러운 치킨의 혁명",
    subPick: true,
    baseRecipe: ["화이트", "로티세리 치킨 1스쿱", "아메리칸 치즈"],
    extraRecipe: ["야채 5종", "스위트 칠리", "랜치"],
    nutrition: {
      weight: { value: 249 },
      calories: { value: 327 },
      protein: { value: 29.1, dailyPercent: 53 },
      saturatedFat: { value: 2.5, dailyPercent: 17 },
      sugar: { value: 7.8, dailyPercent: 8 },
      sodium: { value: 542, dailyPercent: 27 }
    }
  },
  {
    id: 5,
    category: "sandwiches",
    subCategory: "classic",
    korName: "에그마요",
    engName: "Egg Mayo",
    image: "/images/sandwiches/classic/egg_mayo.png",
    description:
      "부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러",
    subPick: true,
    baseRecipe: ["플랫 브레드", "에그마요 2스쿱", "슈레드 치즈"],
    extraRecipe: ["야채 5종", "스위트 칠리", "랜치"],
    nutrition: {
      weight: { value: 238 },
      calories: { value: 416 },
      protein: { value: 16.4, dailyPercent: 30 },
      saturatedFat: { value: 4.8, dailyPercent: 32 },
      sugar: { value: 7.7, dailyPercent: 8 },
      sodium: { value: 552, dailyPercent: 28 }
    }
  },
  {
    id: 6,
    category: "sandwiches",
    subCategory: "premium",
    korName: "안창 비프",
    engName: "Beef",
    image: "/images/sandwiches/premium/beef.png",
    description:
      "안창살을 써브웨의만의 이국적인 특제 시즈닝을 더해 더 부드럽고, 더 풍미있게 즐기는 프리미엄 샌드위치",
    subPick: true,
    baseRecipe: ["화이트", "안창 비프", "아메리칸 치즈"],
    extraRecipe: ["야채 5종", "올리브", "스위트 칠리", "랜치"],
    nutrition: {
      weight: { value: 235 },
      calories: { value: 342 },
      protein: { value: 21.6, dailyPercent: 39 },
      saturatedFat: { value: 4.3, dailyPercent: 29 },
      sugar: { value: 8.3 },
      sodium: { value: 830, dailyPercent: 42 }
    }
  },
  {
    id: 7,
    category: "sandwiches",
    subCategory: "fresh",
    korName: "터키 베이컨 아보카도",
    engName: "Turkey Bacon Avocado",
    image: "/images/sandwiches/fresh/turkey_bacon_avocado.png",
    description:
      "건강하고 담백한 오리지날 터키에 베이컨과 아보카도로 풍미가득 맛도 가득",
    subPick: true,
    baseRecipe: [
      "위트",
      "터키 3장",
      "베이컨 2장",
      "아보카도 1스쿱",
      "모짜렐라 치즈"
    ],
    extraRecipe: ["야채 5종", "마요네즈", "스위트 어니언"],
    nutrition: {
      weight: { value: 246 },
      calories: { value: 355 },
      protein: { value: 20.2, dailyPercent: 36 },
      saturatedFat: { value: 3.2, dailyPercent: 21 },
      sugar: { value: 9.0, dailyPercent: 9 },
      sodium: { value: 940, dailyPercent: 47 }
    }
  },
  {
    id: 8,
    category: "sandwiches",
    subCategory: "premium",
    korName: "스파이시 쉬림프",
    engName: "Spicy Shrimp",
    image: "/images/sandwiches/premium/spicy_shrimp.png",
    description:
      "탱글한 쉬림프에 이국적인 시즈닝을 더해 색다른 매콤함을 만나보세요!",
    subPick: true,
    baseRecipe: ["화이트", "스파이시 쉬림프 5마리", "아메리칸 치즈"],
    extraRecipe: ["야채 4종", "올리브", "마요네즈", "홀스래디쉬"],
    nutrition: {
      weight: { value: 213 },
      calories: { value: 245 },
      protein: { value: 16.5, dailyPercent: 30 },
      saturatedFat: { value: 0.9, dailyPercent: 6 },
      sugar: { value: 9.1, dailyPercent: 9 },
      sodium: { value: 570, dailyPercent: 29 }
    }
  },
  {
    id: 9,
    category: "sandwiches",
    subCategory: "premium",
    korName: "쉬림프",
    engName: "Shrimp",
    image: "/images/sandwiches/premium/shrimp.png",
    description:
      "탱글한 쉬림프 5마리가 그대로, 신선하고 담백한 쉬림프의 맛 그대로 즐겨보세요!",
    subPick: true,
    baseRecipe: ["파마산 오레가노", "새우 5마리", "슈레드 치즈"],
    extraRecipe: ["야채 4종", "올리브", "스위트 칠리", "랜치"],
    nutrition: {
      weight: { value: 209 },
      calories: { value: 241 },
      protein: { value: 16.3, dailyPercent: 30 },
      saturatedFat: { value: 0.6, dailyPercent: 4 },
      sugar: { value: 7.9, dailyPercent: 8 },
      sodium: { value: 415, dailyPercent: 21 }
    }
  },
  {
    id: 10,
    category: "sandwiches",
    subCategory: "fresh",
    korName: "로스트 치킨",
    engName: "Roasted Chicken",
    image: "/images/sandwiches/fresh/roasted_chicken.png",
    description: "오븐에 구워 담백한 저칼로리 닭가슴살의 건강한 풍미",
    subPick: true,
    baseRecipe: ["파마산 오레가노", "치킨 브레스트 1장", "슈레드 치즈"],
    extraRecipe: ["야채 5종", "허니 머스타드", "올리브오일"],
    nutrition: {
      weight: { value: 237 },
      calories: { value: 300 },
      protein: { value: 26, dailyPercent: 47 },
      saturatedFat: { value: 1.3, dailyPercent: 9 },
      sugar: { value: 8.7, dailyPercent: 9 },
      sodium: { value: 605, dailyPercent: 30 }
    }
  },
  {
    id: 11,
    category: "sandwiches",
    subCategory: "premium",
    korName: "풀드포크 바비큐",
    engName: "Pulled Pork Barbecue",
    image: "/images/sandwiches/premium/pulled_pork_barbecue.png",
    description: "미국 스타일의 풀드 포크 바비큐가 가득 들어간 샌드위치",
    subPick: true,
    baseRecipe: ["허니오트", "풀드포크 1스쿱", "아메리칸 치즈"],
    extraRecipe: ["야채 5종", "랜치", "스모크 바비큐"],
    nutrition: {
      weight: { value: 235 },
      calories: { value: 327 },
      protein: { value: 24.8, dailyPercent: 45 },
      saturatedFat: { value: 2.1, dailyPercent: 14 },
      sugar: { value: 7.8, dailyPercent: 8 },
      sodium: { value: 689, dailyPercent: 34 }
    }
  },
  {
    id: 12,
    category: "sandwiches",
    subCategory: "premium",
    korName: "써브웨이 클럽",
    engName: "Subway Club",
    image: "/images/sandwiches/premium/subway_club.png",
    description: "미국 스타일의 풀드 포크 바비큐가 가득 들어간 샌드위치",
    subPick: true,
    baseRecipe: ["허니오트", "풀드포크 1스쿱", "아메리칸 치즈"],
    extraRecipe: ["야채 5종", "랜치", "스모크 바비큐"],
    nutrition: {
      weight: { value: 235 },
      calories: { value: 327 },
      protein: { value: 24.8, dailyPercent: 45 },
      saturatedFat: { value: 2.1, dailyPercent: 14 },
      sugar: { value: 7.8, dailyPercent: 8 },
      sodium: { value: 689, dailyPercent: 34 }
    }
  },
  {
    id: 13,
    category: "sandwiches",
    subCategory: "premium",
    korName: "치킨 데리야끼",
    engName: "Chicken Teriyaki",
    image: "/images/sandwiches/premium/chicken_teriyaki.png",
    description:
      "담백한 치킨 스트립에 달콤짭쪼름한 써브웨이 특제 데리야끼 소스와의 환상적인 만남",
    subPick: true,
    baseRecipe: ["화이트", "치킨 데리야끼 1스쿱", "아메리칸 치즈"],
    extraRecipe: ["야채 4종", "올리브", "마요네즈", "홀스래디쉬"],
    nutrition: {
      weight: { value: 255 },
      calories: { value: 314 },
      protein: { value: 26.5, dailyPercent: 48 },
      saturatedFat: { value: 1.2, dailyPercent: 8 },
      sugar: { value: 10.1, dailyPercent: 10 },
      sodium: { value: 698, dailyPercent: 35 }
    }
  },
  {
    id: 14,
    category: "sandwiches",
    subCategory: "premium",
    korName: "스파이시 이탈리안",
    engName: "Spicy Italian",
    image: "/images/sandwiches/premium/spicy_italian.png",
    description:
      "페퍼로니 & 살라미가 입안 가득, 페퍼로니의 부드러운 매콤함을 만나보세요!",
    subPick: true,
    baseRecipe: ["플랫 브레드", "페퍼로니 5장", "살라미 5장", "슈레드 치즈"],
    extraRecipe: ["야채 5종", "스위트 어니언", "랜치"],
    nutrition: {
      weight: { value: 224 },
      calories: { value: 464 },
      protein: { value: 20.7, dailyPercent: 38 },
      saturatedFat: { value: 9.1, dailyPercent: 60 },
      sugar: { value: 8.7, dailyPercent: 9 },
      sodium: { value: 1250, dailyPercent: 63 }
    }
  },
  {
    id: 15,
    category: "sandwiches",
    subCategory: "classic",
    korName: "비엘티",
    engName: "B.L.T.",
    image: "/images/sandwiches/classic/B.L.T.png",
    description: "오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그대로~",
    subPick: true,
    baseRecipe: ["위트", "베이컨 4장", "모짜렐라 치즈"],
    extraRecipe: ["야채 5종", "랜치", "사우스웨스트 치폴레"],
    nutrition: {
      weight: { value: 182 },
      calories: { value: 300 },
      protein: { value: 15.9, dailyPercent: 29 },
      saturatedFat: { value: 3.7, dailyPercent: 25 },
      sugar: { value: 7.9, dailyPercent: 8 },
      sodium: { value: 666, dailyPercent: 33 }
    }
  },
  {
    id: 16,
    category: "sandwiches",
    subCategory: "fresh",
    korName: "터키",
    engName: "Turkey",
    image: "/images/sandwiches/fresh/turkey.png",
    description: "건강하고 담백한 오리지날 터키 샌드위치",
    subPick: true,
    baseRecipe: ["허니오트", "터키 4장", "아메리칸 치즈"],
    extraRecipe: ["야채 5종", "올리브", "마요네즈", "사우스웨스트 치폴레"],
    nutrition: {
      weight: { value: 221 },
      calories: { value: 265 },
      protein: { value: 18.6, dailyPercent: 234 },
      saturatedFat: { value: 0.9, dailyPercent: 6 },
      sugar: { value: 8.7, dailyPercent: 9 },
      sodium: { value: 751, dailyPercent: 37 }
    }
  },
  {
    id: 17,
    category: "sandwiches",
    subCategory: "fresh",
    korName: "머쉬룸",
    engName: "Mushroom",
    image: "/images/sandwiches/fresh/mushroom.png",
    description:
      "버섯의 건강함을 그대로 담아 신선한 야채와 함께 담백하게 즐기는 샌드위치",
    subPick: true,
    baseRecipe: ["파마산 오레가노", "머쉬룸", "아메리칸 치즈"],
    extraRecipe: ["야채 5종", "랜치", "후추"],
    nutrition: {
      weight: { value: 235 },
      calories: { value: 245 },
      protein: { value: 11.8, dailyPercent: 21 },
      saturatedFat: { value: 0.6, dailyPercent: 4 },
      sugar: { value: 7.7 },
      sodium: { value: 376, dailyPercent: 19 }
    }
  },
  {
    id: 18,
    category: "sandwiches",
    subCategory: "classic",
    korName: "참치",
    engName: "Tuna",
    image: "/images/sandwiches/classic/tuna.png",
    description:
      "남녀노소 누구나 좋아하는 담백한 참치와 고소한 마요네즈의 완벽한 조화",
    subPick: true,
    baseRecipe: ["파마산 오레가노", "참치 2스쿱", "슈레드 치즈"],
    extraRecipe: ["야채 5종", "랜치", "스위트 칠리"],
    nutrition: {
      weight: { value: 238 },
      calories: { value: 316 },
      protein: { value: 26.9, dailyPercent: 49 },
      saturatedFat: { value: 1.4, dailyPercent: 9 },
      sugar: { value: 7.6, dailyPercent: 8 },
      sodium: { value: 535, dailyPercent: 27 }
    }
  },
  {
    id: 19,
    category: "sandwiches",
    subCategory: "classic",
    korName: "햄",
    engName: "Ham",
    image: "/images/sandwiches/classic/ham.png",
    description: "풍부한 햄이 만들어내는 담백함을 입 안 가득 즐겨보세요!",
    subPick: true,
    baseRecipe: ["위트", "햄 4장", "모짜렐라 치즈"],
    extraRecipe: ["야채 5종", "올리브", "피클", "마요네즈", "홀스래디쉬"],
    nutrition: {
      weight: { value: 220 },
      calories: { value: 262 },
      protein: { value: 19, dailyPercent: 35 },
      saturatedFat: { value: 1, dailyPercent: 7 },
      sugar: { value: 8.4, dailyPercent: 8 },
      sodium: { value: 680, dailyPercent: 34 }
    }
  },
  {
    id: 20,
    category: "sandwiches",
    subCategory: "fresh",
    korName: "에그 슬라이스",
    engName: "Egg Slice",
    image: "/images/sandwiches/fresh/egg_slice.png",
    description:
      "달걀의 신선함과 담백함을 그대로 담아 맛도, 영양도 사로잡은 샌드위치를 만나보세요.",
    subPick: true,
    baseRecipe: ["위트", "에그 1개(슬라이스)", "모짜렐라 치즈"],
    extraRecipe: ["야채 5종", "올리브", "스위트 칠리", "랜치"],
    nutrition: {
      weight: { value: 214 },
      calories: { value: 279 },
      protein: { value: 15.2, dailyPercent: 28 },
      saturatedFat: { value: 2.3, dailyPercent: 16 },
      sugar: { value: 7.6, dailyPercent: 7.6 },
      sodium: { value: 447, dailyPercent: 22 }
    }
  },
  {
    id: 21,
    category: "sandwiches",
    subCategory: "fresh",
    korName: "베지",
    engName: "Veggie Delite",
    image: "/images/sandwiches/fresh/veggie_delite.png",
    description: "갓 구운 빵과 신선한 8가지 야채로 즐기는 깔끔한 한끼",
    subPick: true,
    baseRecipe: ["허니오트", "아메리칸 치즈"],
    extraRecipe: ["야채 5종", "엑스트라 버진 올리브 오일", "레드 와인 식초"],
    nutrition: {
      weight: { value: 164 },
      calories: { value: 209 },
      protein: { value: 9.2, dailyPercent: 17 },
      saturatedFat: { value: 0.6, dailyPercent: 4 },
      sugar: { value: 7.6, dailyPercent: 8 },
      sodium: { value: 262, dailyPercent: 13 }
    }
  }
];
