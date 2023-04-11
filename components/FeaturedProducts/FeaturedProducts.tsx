import React from "react";
import styles from "./FeaturedProducts.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "@/pages/api/models/Product";

interface Props {
  products: Product[];
}

const FeaturedProducts: React.FC<Props> = ({ products }) => {
  return (
    <div className={styles.featuredProducts}>
      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard key={product._id.toString()} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
