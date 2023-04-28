import { Product } from "@/pages/api/models/Product";
import { ObjectId } from "mongodb";
import { connectToDatabase } from "./mongodb";

export const getAllProducts = async () => {
  let { db, client } = await connectToDatabase();
  const products = db.collection<Product>("products");

  const data = await products.find().toArray();
  client.close();

  const allProductsData = data.map((data) => {
    const id = data._id;

    const product = data;

    return {
      id,
      ...product,
    };
  });

  return allProductsData;
};

export const getAllProductIds = async () => {
  let { db, client } = await connectToDatabase();
  const products = db.collection<Product>("products");

  const data = await products.find().toArray();

  client.close();

  return data.map((data) => {
    return {
      params: {
        id: data._id,
      },
    };
  });
};

export const getProduct = async (id: ObjectId) => {
  let { db, client } = await connectToDatabase();
  const product = await db.collection<Product>("products").findOne({ _id: id });
  return {
    product,
  };
};
