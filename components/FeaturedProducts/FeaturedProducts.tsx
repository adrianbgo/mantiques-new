import React from "react";
import styles from "./FeaturedProducts.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "@/pages/api/models/Product";
import { getAllProducts } from "@/lib/products";
import { GetStaticProps } from "next";

interface Props {
  products: Product[];
}

const FeaturedProducts: React.FC<Props> = ({ products }) => {
  return (
    <div className={styles.featuredProducts}>
      <h2 className={styles.featuredProductsTitle}>Featured Products</h2>
      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard key={product._id.toString()} product={product} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const products = await getAllProducts();
  return {
    props: { products },
  };
};

export default FeaturedProducts;
