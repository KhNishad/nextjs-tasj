"use client";

import Image from "next/image";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Slide = () => {
  return (
    <div className="relative">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
          1440: {
            slidesPerView: 1,
          },
        }}
      >
        <div>
          <SwiperSlide>
            <div className="relative h-[400px] md:h-auto sm:h-auto xls:h-auto xms:h-auto xs:h-auto w-full">
              <Image
                src={`/image/2.jpg`}
                width={500}
                height={500}
                alt="slide 1"
                className="object-fill h-full w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[400px] md:h-auto sm:h-auto xls:h-auto xms:h-auto xs:h-auto w-full">
              <Image
                src={`/image/1.jpg`}
                width={500}
                height={500}
                alt="slide 2"
                className="object-fill h-full w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-[400px] md:h-auto sm:h-auto xls:h-auto xms:h-auto xs:h-auto w-full">
              <Image
                src={`/image/3.jpg`}
                width={500}
                height={500}
                alt="slide 2"
                className="object-fill h-full w-full"
              />
            </div>
          </SwiperSlide>
        </div>

        <div className="button-prev-slide w-[30px] h-[30px] rounded-full  bg-slate-50 text-black grid place-items-center absolute top-[47%] z-10 left-[20px] cursor-pointer">
          <MdOutlineKeyboardArrowLeft size={20} className="text-primary" />
        </div>
        <div className="button-next-slide w-[30px] h-[30px] rounded-full bg-slate-50 text-black grid place-items-center absolute top-[47%] z-10 right-[20px] cursor-pointer">
          <MdOutlineKeyboardArrowRight size={20} className="text-primary" />
        </div>
      </Swiper>
    </div>
  );
};

export default Slide;
