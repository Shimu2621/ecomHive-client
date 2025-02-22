"use client"; // Ensures this runs only on the client

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import sliders from "@/staticData/slider";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }} // Link to custom elements
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div>
              <div className="relative w-full h-[65vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
                <Image
                  fill
                  src={slider.image}
                  alt={slider.title}
                  priority
                  className="object-cover" // Full-width and fixed height
                />
                {/* Shade opacity */}
                <div className="absolute top-0 left-0 bg-black h-full w-full opacity-40"></div>
              </div>
              <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  {slider.title}
                </h2>
                <p className="text-sm sm:text-md md:text-lg lg:text-xl mt-4">
                  {slider.description}
                </p>
                <a
                  href={slider.buttonLink}
                  className=" inline-block mt-6 px-8 py-3 text-sm sm:text-md md:text-lg lg:text-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg  shadow-lg hover:shadow-blue-500/50 transition-shadow"
                >
                  {slider.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Arrows */}
        <div className="custom-prev absolute left-2 sm:left-4 top-1/2 py-3 px-3 sm:py-4 sm:px-4 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-900 text-white font-bold rounded-lg shadow-lg hover:shadow-blue-500/50 transition-shadow cursor-pointer z-10">
          &#10094;
        </div>
        <div className="custom-next absolute right-2 sm:right-4 top-1/2 py-3 px-3 sm:py-4 sm:px-4 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-900 text-white font-bold rounded-lg shadow-lg hover:shadow-blue-500/50 transition-shadow cursor-pointer z-10">
          &#10095;
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
