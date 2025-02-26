export interface Product {
  _id: string;
  name: string;
  slug: string;
  thumbnail: string;
  price: number;
  discount: Discount;
  createdAt: string;
  ratingCount: number;
  average: number | null;
  description: string;
  stock: number;
}

export interface Discount {
  discountType: "flat" | "percent";
  value: number;
}

export interface AllProductsTypes {
  success: boolean;
  products: Product[];
}
