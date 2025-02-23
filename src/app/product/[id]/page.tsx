import ProductDetails from "@/components/product/ProductDetails";
import React from "react";

interface Params {
  id: string;
}

const SingleProductPage = async ({ params }: { params: Params }) => {
  const id = params.id;
  const res = await fetch(`https://staging-be-ecom.techserve4u.com/api/product/${id}`);
  const data = await res.json();

  return (
    <>
    <ProductDetails product={data?.product} />
    </>
  );
};

export default SingleProductPage;
