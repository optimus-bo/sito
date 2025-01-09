import { useRef } from "react";
import { Swiper as SwiperClass } from "swiper";
import { Controller, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CaroselloProgetti() {
  const swiperRef = useRef<SwiperClass | null>(null);

  function SwitchSlide(newIndex: number) {
    swiperRef.current?.slideTo(newIndex);
  }
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper: SwiperClass) => SwitchSlide(swiper.activeIndex)}
      onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
      modules={[Pagination, Controller]}
    >
      <SwiperSlide style={{ height: "100%" }}>
        Slide 1 ksdfhiusfsifsiuffrfs fknskfjsnfirfefr gdgfs
        vgdfgjkdngfriugfirfji iuschuis aiudha9dhw9dwudh sddfkifeieiusjuidd
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}
