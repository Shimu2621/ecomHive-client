import FeaturedProducts from "@/components/homePage/FeaturedProducts";
import AllProducts from "@/components/product/AllProducts";

const ProductPage = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/product/getProducts`
  );
  // console.log("Response:", res);
  const data = await res.json();
  const products = data.products || [];
  console.log("Fetched Products:", products);

  // async function featuredProductPage() {
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_BASE_URL}/product/getFeatured`
  //   );
  //   // console.log("Response:", res);
  //   const data = await res.json();
  //   const featuredProducts = data.products || [];
  //   console.log("Fetched Featured Products:", featuredProducts);
  //   return featuredProducts; // Returning data if needed
  // }

  return (
    <>
      <AllProducts products={products} />
      {/* <FeaturedProducts products={featuredProducts} /> */}
    </>
  );
};

export default ProductPage;
