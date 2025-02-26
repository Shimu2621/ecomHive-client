import ProductDetails from "@/components/product/ProductDetails";

interface Params {
  id: string;
}

const SingleProductPage = async ({ params }: { params: Params }) => {
  const id = params.id;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/${id}`);
  const data = await res.json();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <ProductDetails product={data?.product} />
    </div>
  );
};

export default SingleProductPage;
