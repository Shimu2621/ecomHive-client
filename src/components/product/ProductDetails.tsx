"use client";

import { ProductType } from "@/types/products/allProducts";
import Image from "next/image";
import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";

async function ProductDetails({ product }: { product: ProductType }) {
  console.log(product);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="grid grid-cols-2 gap-8 bg-white">
      {/* Left - Product Image */}
      <div className="flex justify-center">
        <Image
          src={product?.image}
          alt={product?.name}
          width={400}
          height={400}
          className="rounded-lg object-contain"
        />
      </div>

      {/* Right - Product Info */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">{product?.name}</h1>
        <p className="text-sm mb-2 ">
          <Rating
            style={{ maxWidth: 120 }}
            value={product?.ratings}
            readOnly
            halfFillMode="svg"
          />
        </p>
        <p className="text-lg font-semibold text-orange-600 mt-3">
          ${product?.price}
        </p>
        <p className="text-gray-600 mt-2">{product?.description}</p>
        <p className="text-sm text-gray-500">Category: {product?.category}</p>
      </div>

      {/* Add to Cart & Buy Now Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500">
          Add to Cart
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
