import Banner from "@/components/homePage/Banner";
import BasicServices from "@/components/homePage/BasicServices";
import LatestProduct from "@/components/homePage/LatestProduct";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <BasicServices />
      <LatestProduct />
    </div>
  );
}
