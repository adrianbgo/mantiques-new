// api/products.js

import connectDB from "../../utils/connectDB";
import Product from "../../models/Product";

connectDB();

const products = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { name, description, price, imageUrl } = req.body;

      const product = new Product({
        name,
        description,
        price,
        imageUrl,
      });

      await product.save();

      res.status(201).json({ message: "Product created" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
};
export default products;
