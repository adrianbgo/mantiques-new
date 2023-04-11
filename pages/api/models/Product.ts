import { Schema, model } from "mongoose";
import { ObjectId } from "mongodb";

export interface Product {
  _id: ObjectId;
  name: string;
  description: string;
  image: string;
  price: number;
  published: boolean;
  featured: boolean;
}

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  published: {
    type: Boolean,
    required: true,
  },
});

const Product = model("Product", productSchema);

export default Product;
