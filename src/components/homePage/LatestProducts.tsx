async function getLatestProducts() {
  const res = await fetch("http://localhost:5000/api/products", {
    cache: "no-store",
  });
  return res.json();
}
export default async function LatestProducts(products: any) {
  const products = await getLatestProducts();

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Latest Products
      </h2>
    </div>
  );
}
