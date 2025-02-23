import AllProducts from "@/components/product/AllProducts";


const ProductPage = async () => {
  const res = await fetch('https://staging-be-ecom.techserve4u.com/api/product/getProducts');
  const data = await res.json();

  return (
   <>
   <AllProducts products={data?.products} />
   </>
  );
};

export default ProductPage;
