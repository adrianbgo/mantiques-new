import { connectToDatabase } from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "./models/Product";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET": {
      return getProducts(req, res);
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

export default handler;
