import { connectToDatabase } from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "./models/Product";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET": {
      return getProducts(req, res);
    }
    case "POST": {
      return addProduct(req, res);
    }
  }
};

const getProducts = async (req: NextApiRequest, res: NextApiResponse<any>) => {
  try {
    let { db } = await connectToDatabase();

    let products = await db
      .collection<Product>("products")
      .find({})
      .sort({ published: -1 })
      .toArray();

    return res.json({
      message: JSON.parse(JSON.stringify(products)),
      success: true,
    });
  } catch (e: any) {
    return res.json({
      message: e.message,
      success: false,
    });
  }
};

const addProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    let { db } = await connectToDatabase();
    await db.collection("products").insertOne(JSON.parse(req.body));

    return res.json({
      message: "Product added successfully",
      success: true,
    });
  } catch (e: any) {
    return res.json({
      message: e.message,
      success: false,
    });
  }
};

export default handler;
