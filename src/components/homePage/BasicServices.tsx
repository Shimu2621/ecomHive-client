import basicServices from "@/staticData/basicServices";
import Container from "@/utils/container/Container";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const BasicServices = () => {
  return (
    <div className="bg-white h-[60vh] py-16">
      <Container>
        <div className="grid grid-cols1 sm:grid-cols-2 lg:grid-cols-4 items-center mt-32 border border-gray-200 p-6 max-w-[1400px] mx-auto">
          {basicServices.map((service) => (
            <Marquee>
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
            </Marquee>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BasicServices;
