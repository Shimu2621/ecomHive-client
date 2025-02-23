import AllProducts from "@/components/product/AllProducts";

const ProductPage = async () => {
  const res = await fetch(
    "https://staging-be-ecom.techserve4u.com/api/product/getProducts",
    { method: "GET" }
  );
  console.log("Response:", res);
  const data = await res.json();
  console.log("Fetched Data:", data);

  return (
    <>
      <AllProducts products={data.data ?? []} />
    </>
  );
};

export default ProductPage;

// https://staging-be-ecom.techserve4u.com/api/product/getProducts
