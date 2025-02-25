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
import { ProductType } from "@/types/products/allProducts";

function ProductCard({ product }: { product: ProductType }) {
  return (
    <div className="">
      <Container>
        <Link href={`/product/${product?._id}`}>
          <Card className="w-full h-100 rounded-sm  hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            <CardHeader className="mt-4">
              <Image
                src={product?.image}
                alt="Product Photo"
                height={384}
                width={360}
                className="h-40 w-72 mx-auto object-contain mb-4 hover:scale-105 transition duration-300 ease-in-out"
              />
              <CardTitle className="text-gray-700 font-bold text-lg">
                {product?.name}
              </CardTitle>
              <CardDescription className="text-sm text-gray-500 mb-2 line-clamp-2">
                {product?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-gray-600 ">
                Category: {product?.category}
              </p>
              <p className="text-sm mb-2 ">
                <Rating
                  style={{ maxWidth: 120 }}
                  value={product?.ratings}
                  readOnly
                  halfFillMode="svg"
                />
              </p>
              <p className="font-bold  text-gray-600">
                Price : <span className="text-gray-500">${product?.price}</span>
              </p>
            </CardContent>
            <CardFooter>
              <button className="mt-2 px-3 py-2 text-xs lg:text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-md  shadow-lg hover:shadow-blue-500/50 transition-shadow">
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
