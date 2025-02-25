"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { Product } from "@/types/product/allProducts";

export default function LatestProductSlider({
  products,
}: {
  products: Product[];
}) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      className="w-full"
    >
      {products.map((product) => (
        <SwiperSlide key={product?._id} className="p-4">
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <Image
              src={product?.thumbnail}
              alt={product?.name}
              width={200}
              height={200}
              className="mx-auto rounded-lg object-contain"
            />
            <h3 className="text-lg font-semibold text-gray-800 mt-4">
              {product?.name}
            </h3>
            <p className="text-orange-600 font-bold mt-2">${product?.price}</p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
              View Details
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
