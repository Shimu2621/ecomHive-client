"use client";
import basicServices from "@/staticData/basicServices";
import Container from "@/utils/container/Container";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// Aos
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BasicServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-white pt-20 pb-20">
      <Container>
        <div
          className="border border-gray-200 px-2 py-8 max-w-[1400px] mx-auto"
          data-aos="zoom-in"
        >
          <Marquee>
            <div
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-16"
              data-aos="fade-right"
            >
              {basicServices.map((service) => (
                <div
                  key={service?.id}
                  className="flex flex-col items-center justify-center"
                >
                  <Image
                    src={service?.icon}
                    width={55}
                    height={55}
                    alt="Basic services icon"
                    className="mb-2"
                    unoptimized={true} // This will allow Next.js to use images from `public`
                  />
                  <h4 className="text-gray-600 text-lg font-bold">
                    {service?.title}
                  </h4>
                  <p className="text-sm">{service?.status}</p>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </Container>
    </div>
  );
};

export default BasicServices;
