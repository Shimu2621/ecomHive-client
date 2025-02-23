"use client";

import React from "react";
import ProductCard from "./ProductCard";
import { AllProductsType } from "../../types/products/allProducts";

function AllProducts({ products }: { products: AllProductsType[] }) {
  console.log(products);
  return (
    <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 my-20">
      {products?.map((product: any, index: number) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default AllProducts;
