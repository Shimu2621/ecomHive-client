import LatestProducts from "@/components/homePage/LatestProducts";
import AllProducts from "@/components/product/AllProducts";
// import axios from "axios";
// import https from "https"; // Import the https module

const ProductPage = async () => {
  const res = await fetch(`${process.env.BASE_URL}/product/getProducts`);
  // console.log("Response:", res);
  const data = await res.json();
  console.log("Fetched Products:", data);

  async function getLatestProducts() {
    const res = await fetch(`${process.env.BASE_URL}/product/getProducts`, {
      cache: "no-store",
    });
    return res.json();
  }

  return (
    <>
      <AllProducts products={data.data} />
      <LatestProducts products={products} />
    </>
  );
};

export default ProductPage;
