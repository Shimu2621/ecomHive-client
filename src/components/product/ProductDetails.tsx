import React from "react";

async function ProductDetails({ product }: { product: any }) {
  console.log(product);
  return <div>Product Name : {product?.name}</div>;
}

export default ProductDetails;
