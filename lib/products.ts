import { Product } from "@/pages/api/models/Product";

export const getAllProducts = async () => {
  let dev = process.env.NODE_ENV !== "production";
  let { DEV_URL, PROD_URL } = process.env;
  const response: Response = await fetch(
    `${dev ? DEV_URL : PROD_URL}/api/products`
  );
  let data = await response.json();
  let products: Array<Product> = [];
  return products;
};
