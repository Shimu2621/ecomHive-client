"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Product } from "@/types/product/allProducts";
import { Rating } from "@smastrom/react-rating";
import parse from "html-react-parser";

function ProductDetails({ product }: { product: Product }) {
  console.log(product);

  return (
    <div className=" min-h-screen mt-20">
      <h1 className="text-3xl font-bold italic text-gray-700 text-center mb-2">
        Product Details
      </h1>
      <p className="text-center text-gray-500 mb-12">
        {" "}
        Discover the perfect product designed for you. This product ensures that
        you're looking for use purpose, <br />
        this is the ideal choice for you!
      </p>
      {/* Left - Product Image */}
      <div className="grid grid-cols-2 gap-16 h-[60vh] w-full">
        <div className="flex justify-center bg-orange-50">
          <Image
            src={product?.thumbnail}
            alt={product?.name}
            width={400}
            height={400}
            className="rounded-lg object-contain"
          />
        </div>

        {/* Right - Product Info */}
        <div className="py-14">
          <h1 className="text-2xl font-bold text-gray-600 mb-1">
            {product?.name}
          </h1>
          <p className="text-sm mb-2 ">
            <Rating
              style={{ maxWidth: 120 }}
              value={product?.ratingCount}
              readOnly
              halfFillMode="svg"
            />
          </p>
          <p className="text-gray-500 text-sm pt-4 pb-4 ">
            {parse(product?.description)}
          </p>
          <div className="flex w-full flex-col">
            <div className="divider"></div>
          </div>
          {/* Product price */}
          <div className="text-xl">
            <div>
              {product.discount.value > 0 ? (
                <div>
                  {product?.discount?.discountType === "flat" && (
                    <h2 className="text-gray-600 font-bold">
                      ${product?.price - product?.discount?.value}
                      <span className="text-gray-300 line-through text-lg  ml-2">
                        ${product?.price}
                      </span>
                    </h2>
                  )}
                  {product?.discount?.discountType === "percent" && (
                    <h2 className="text-gray-600 font-bold">
                      $
                      {product?.price -
                        Math.floor(
                          product.price * (product?.discount?.value / 100)
                        )}
                      <span className="text-gray-300 line-through text-lg ml-2">
                        ${product?.price}
                      </span>
                    </h2>
                  )}
                </div>
              ) : (
                <h2 className="price">${product?.price}</h2>
              )}
            </div>
          </div>

          <p className="text-gray-600 font-semibold">Stock: {product?.stock}</p>
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
      </div>
    </div>
  );
}

export default ProductDetails;
