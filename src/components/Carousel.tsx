import { useState } from "react";
import { useEffect } from "react";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { api } from "../services/api";
import { CarouselItem } from "./CarouselItem";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

type Continent = {
  slug: string;
  name: string;
  label: string;
  url: string;
}

export function Carousel() {

  const [continents, setContinents] = useState<Continent[]>([]);

  useEffect(() => {
    api.get("/continents").then(res => setContinents(res.data));
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={{ width: '100%', flex: '1', height: '100%' }}
    >
      {continents.map(continent => {
        return (
          <SwiperSlide key={continent.slug}>
            <CarouselItem
              image={continent.url}
              label={continent.label}
              name={continent.name}
              slug={continent.slug}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
