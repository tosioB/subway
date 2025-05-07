import SubHeader from "@/components/SubHeader";
import ComTab from "@/components/ComTab";
import PageTitle from "@/components/PageTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "@/assets/common.scss";
import "@/assets/guide-page.scss";

const InStoreOrder = () => {
  return (
    <div className="in-store-order">
      <div className="step-pagination"></div>
      <Swiper
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev"
        }}
        pagination={{
          el: ".step-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"> STEP<strong>${
              index + 1
            }</strong></span>`;
          }
        }}
        modules={[Navigation, Pagination]}
        className="com-swiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
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
