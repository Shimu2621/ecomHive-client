export interface ProductType {
  _id: string;
  name: string;
  image: string;
  price: number;
  ratings: number;
  description: string;
  category: string;
}

export interface AllProductsType {
  products: ProductType[];
}
