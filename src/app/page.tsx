import Banner from "@/components/homePage/Banner";
import BasicServices from "@/components/homePage/BasicServices";
// import FeaturedProducts from "@/components/homePage/FeaturedProducts";

import Footer from "@/components/shared/footer";

import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <BasicServices />
      {/* <FeaturedProducts /> */}
      <Footer />
    </div>
  );
}
