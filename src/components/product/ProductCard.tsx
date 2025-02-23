import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { ProductType } from "@/types/products/allProducts";
import { defaultOverrides } from "next/dist/server/require-hook";
import Container from "@/utils/container/Container";

function ProductCard({ product }: { product: ProductType }) {
  return (
    <div className="">
      <Container>
        <Link href={`/product/${product?._id}`}>
          <Card className="w-full h-100 hover:bg-gray-100 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            <CardHeader className="mt-4">
              <Image
                src={product?.image}
                alt="Product Photo"
                height={384}
                width={360}
                className="h-40 w-60 mx-auto object-contain"
              />
              <CardTitle className="text-gray-700 font-bold text-lg">
                {product?.name}
              </CardTitle>
              <CardDescription className="text-sm text-orange-900 mb-2 line-clamp-2">
                {product?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-bold text-gray-600">{product?.category}</p>
              <p>Ratings: {product?.ratings}</p>
              <p>Price : {product?.price}</p>
            </CardContent>
          </Card>
        </Link>
      </Container>
    </div>
  );
}

export default ProductCard;
