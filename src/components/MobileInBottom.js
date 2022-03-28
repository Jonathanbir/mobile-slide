import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCards } from "swiper";

const MobileInBottom = (props) => {
  const mobileData = [
    {
      index: "1",
      img: "https://media.innity.net/202203_40745/164192/317478/assets_317478/card_1.jpg",
      id: "shopImg1",
      link: "https://www.iq.com/album/%E4%B8%AD%E5%9C%8B%E6%96%B0%E8%AA%AA%E5%94%B12020-%E7%8D%A8%E5%AE%B6%E5%B0%88%E8%A8%AA-2020-1ja190774mp?lang=zh_tw",
    },
    {
      index: "2",
      img: "https://media.innity.net/202203_40745/164192/317478/assets_317478/card_2.jpg",
      id: "shopImg2",
      link: "https://www.iq.com/album/%E4%B8%AD%E5%9C%8B%E6%96%B0%E8%AA%AA%E5%94%B12020-%E7%8D%A8%E5%AE%B6%E5%B0%88%E8%A8%AA-2020-1ja190774mp?lang=zh_tw",
    },
    {
      index: "3",
      img: "https://media.innity.net/202203_40745/164192/317478/assets_317478/card_3.jpg",
      id: "shopImg3",
      link: "https://www.iq.com/album/%E4%B8%AD%E5%9C%8B%E6%96%B0%E8%AA%AA%E5%94%B12020-%E7%8D%A8%E5%AE%B6%E5%B0%88%E8%A8%AA-2020-1ja190774mp?lang=zh_tw",
    },
  ];

  return (
    <div className={props.rotate ? "mobile-bottom-rotate" : "mobile-bottom"}>
      <div className="close-btn" onClick={() => props.useRotate(false)}></div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 100,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={mobileData[0].img} />)
        </SwiperSlide>
        <SwiperSlide>
          <img src={mobileData[1].img} />)
        </SwiperSlide>
        <SwiperSlide>
          <img src={mobileData[2].img} />)
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MobileInBottom;
