import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import Container from "@/utils/container/Container";
// Smastorm react rating
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Product } from "@/types/product/allProducts";

function ProductCard({ product }: { product: Product }) {
  return (
    <div>
      <Container>
        <Link href={`/product/${product?._id}`}>
          <Card className="w-full h-100 shadow-sm border border-none">
            <div className="">
              <Image
                src={product?.thumbnail || "/logo/logo.png"}
                alt="Product Photo"
                height={384}
                width={360}
                className="w-96 h-64 p-4 mx-auto rounded-sm border border-gray-200 object-contain mb-2  hover:scale-105 transition duration-300"
              />
            </div>
            <CardHeader className="mt-2">
              <CardTitle className="text-gray-700 font-bold text-lg">
                {product?.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2 ">
                <Rating
                  style={{ maxWidth: 120 }}
                  value={product?.ratingCount}
                  readOnly
                  halfFillMode="svg"
                />
              </p>
              <div className="text-xl">
                <div>
                  {product.discount.value > 0 ? (
                    <div>
                      {product?.discount?.discountType === "flat" && (
                        <h2 className="text-gray-600 font-bold">
                          ${product?.price - product?.discount?.value}
                          <span className="text-gray-300 line-through  ml-2">
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
                          <span className="text-gray-300 line-through  ml-2">
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
            </CardContent>
            <CardFooter>
              <button className="px-3 py-2 text-xs lg:text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md  shadow-lg hover:shadow-blue-500/50 transition-shadow">
                View Details
              </button>
            </CardFooter>
          </Card>
        </Link>
      </Container>
    </div>
  );
}

export default ProductCard;
