"use client";

import { AllProductsTypes } from "@/types/product/allProducts";
import ProductCard from "./ProductCard";
import Container from "@/utils/container/Container";

function AllProducts({ products = [] }: { products: AllProductsTypes[] }) {
  console.log("Products:", products);

  return (
    <div>
      {/* Search Bar functionality */}
      {/* <div className="join flex flex-col items-center space-y-4  border border-black bg-black p-8 max-w-4xl w-full mx-auto">
        <div className="flex items-center  w-full max-w-4xl rounded-md">
          <input
            ref={searchRef}
            onClick={handleSearch}
            type="text"
            className="input input-bordered join-item flex-1 bg-white"
            placeholder="Search here..."
          />
          <select
            ref={categoryRef}
            onChange={handleSelectCategory}
            className=" select select-bordered join-item flex-1 bg-white"
          >
            <span>
              <BiCategoryAlt />
            </span>
            <option disabled selected>
              All Category
            </option>
            <option>Men</option>
            <option>Women</option>
            <option>Accessories</option>
            <option>Fragrances</option>
            <option>Furniture</option>
            <option>Groceries</option>
          </select>
          <button
            onClick={handleSearch}
            className="btn bg-orange-900 join-item text-white px-10 hover:bg-orange-600"
          >
            Search
          </button>
        </div>
      </div> */}

      <div className="mx auto pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-700 italic ">
            Our Exclusive Products Collection
          </h1>
          <p className="text-gray-500 ">
            Stay ahead with our latest collection of trendy and high-quality
            products. Limited stock available,
            <br />
            shop now before it's gone!
          </p>
        </div>
        <Container>
          <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 my-14 pb-20">
            {products?.map((product: any, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AllProducts;
