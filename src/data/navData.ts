// 메뉴소개
export const menuList = {
  id: 1,
  title: "메뉴소개",
  links: [
    { path: "/sandwich", label: "샌드위치" },
    { path: "/wrap", label: "랩ㆍ기타" },
    { path: "/salad", label: "샐러드" },
    { path: "/morning", label: "아침메뉴" },
    { path: "/sidedrink", label: "스마일 썹" },
    { path: "/catering", label: "단체메뉴" },
  ],
};

// 이용방법
export const guide = {
  id: 2,
  title: "이용방법",
  links: [
    { path: "/", label: "써브웨이 이용방법" },
    { path: "/", label: "단체메뉴 이용방법" },
    { path: "/", label: "신선한 재료 소개" },
    { path: "/", label: "App 이용 방법" },
  ],
};

// 새소식
export const news = {
  id: 3,
  title: "새소식",
  links: [
    { path: "/", label: "이벤트ㆍ프로모션" },
    { path: "/", label: "뉴스ㆍ공지사항" },
    { path: "/", label: "광고영상" },
  ],
};

// 써브웨이
export const subway = {
  id: 4,
  title: "써브웨이",
  links: [
    { path: "/", label: "써브웨이 역사" },
    { path: "/", label: "써브웨이 약속" },
    { path: "/", label: "샌드위치 아티스트 지원" },
    { path: "/", label: "매장찾기" },
  ],
};

// 가맹점
export const franchise = {
  id: 5,
  title: "가맹점",
  links: [
    { path: "/", label: "써브웨이 프랜차이즈" },
    { path: "/", label: "가맹관련 FAQ" },
    { path: "/", label: "가맹신청ㆍ문의" },
    { path: "/", label: "지사안내" },
    { path: "/", label: "사업설명회" },
  ],
};

// 온라인 주문
export const onlineOrder = {
  id: 6,
  title: "온라인 주문",
  links: [
    { path: "/", label: "FAST-SUB" },
    { path: "/", label: "HOME-SUB" },
    { path: "/", label: "단체주문" },
  ],
};

export const navData = [menuList, guide, news, subway, franchise, onlineOrder];
