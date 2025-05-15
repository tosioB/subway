import SubHeader from "@/components/SubHeader";
import ComTab from "@/components/ComTab";
import PageTitle from "@/components/PageTitle";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "@/assets/common.scss";
import "@/assets/guide-page.scss";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ds = [
  {
    id: 1,
    images: "/images/in_store_order_01.png",
    title: "메뉴 선택",
    description:
      "메뉴를 고르세요.\n샌드위치(15cm 또는 30cm)와\n샐러드 중 선택 가능합니다.",
    btnList: [
      { btnTitle: "샌드위치 종류", btnUrl: "/sandwich" },
      { btnTitle: "샐러드 종류", btnUrl: "/salad" }
    ]
  },
  {
    id: 2,
    images: "/images/in_store_order_02.png",
    title: "빵 선택",
    description:
      "매장에서 직접 구운 6가지 종류 중\n고객님이 원하는 빵으로\n추가비용 없이 선택 가능합니다.",
    btnList: [{ btnTitle: "빵 종류", btnUrl: "/fresh_ingredients" }]
  },
  {
    id: 3,
    images: "/images/in_store_order_03.png",
    title: "추가토핑 선택",
    description: "나만의 메뉴를 더욱 풍성하게 즐기세요.",
    btnList: [{ btnTitle: "추가토핑 메뉴", btnUrl: "/sandwich" }]
  },
  {
    id: 4,
    images: "/images/in_store_order_04.png",
    title: "야채&소스 선택",
    description:
      "나만의 스타일을 완성하는 단계!\n원하지 않는 야채는 빼고 좋아하는 야채는 더하세요.\n오늘의 기분에 맞는 소스를 선택해주세요.",
    btnList: [
      { btnTitle: "야채 종류", btnUrl: "/fresh_ingredients" },
      { btnTitle: "소스 종류", btnUrl: "/fresh_ingredients" }
    ]
  },
  {
    id: 5,
    images: "/images/in_store_order_05.png",
    title: "세트 선택",
    description:
      "세트로 구매하시면 할인혜택을 받으실 수 있습니다. 세트로 더욱 든든하고 알차게 즐기세요.",
    btnList: [{ btnTitle: "스마일 썹", btnUrl: "/smile_sub" }]
  }
];

const InStoreOrder = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updatePagination = (current: number) => {
    const bullets = document.querySelectorAll(".step-pagination span");
    bullets.forEach((bullet, index) => {
      if (index <= current) {
        bullet.classList.add("active");
      } else {
        bullet.classList.remove("active");
      }
    });
  };

  useEffect(() => {
    updatePagination(activeIndex);
  }, [activeIndex]);

  return (
    <div className="in-store-order">
      <div className="step-pagination"></div>
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev"
        }}
        pagination={{
          el: ".step-pagination",
          clickable: false,
          renderBullet: (index, className) => {
            return `<span class="${className}"> STEP<strong>${
              index + 1
            }</strong></span>`;
          }
        }}
        modules={[Navigation, Pagination]}
        className="com-swiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {ds.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="in-store-order-step">
                <img src={item.images} alt={item.title} />
                <div className="step-exp">
                  <p className="step-num">STEP {item.id}</p>
                  <p className="title">{item.title}</p>
                  <p className="description">{item.description}</p>
                  <div className="link-box">
                    {item.btnList.map((btn) => {
                      return <Link to={btn.btnUrl}>{btn.btnTitle}</Link>;
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="swiper-nav">
          <button type="button" className="swiper-prev">
            이전
          </button>
          <button type="button" className="swiper-next">
            다음
          </button>
        </div>
      </Swiper>
    </div>
  );
};

const OrderTips = () => {
  return <div className="order-tips">주문 TIP</div>;
};

const SubwayGuide = () => {
  const tabs = [
    { label: "매장에서 주문하기", content: <InStoreOrder /> },
    { label: "주문 TIP", content: <OrderTips /> }
  ];

  return (
    <div className="subway-guide-page guide-page">
      <SubHeader category="이용방법" basicColor="#999" activeColor="#009223" />
      <PageTitle title="써브웨이 이용방법" />
      <ComTab tabs={tabs} />
    </div>
  );
};

export default SubwayGuide;
