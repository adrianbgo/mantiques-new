import ProductCard from "@/components/ProductCard/ProductCard";
import { getAllProductIds, getAllProducts } from "@/lib/products";
import React from "react";
import { Product } from "../api/models/Product";
import styles from "../../styles/Products.module.css";
import Layout from "@/components/Layout/Layout";

interface IProducts {
  allProductsData: Product[];
}
const Products = ({ allProductsData }: IProducts) => {
  return (
    <Layout>
      <h1 className={styles.header}>Products</h1>
      <div className={styles.grid}>
        {allProductsData.map((product) => (
          <ProductCard product={product} key={product.name} />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const allProductsData = JSON.parse(JSON.stringify(await getAllProducts()));
  return {
    props: {
      allProductsData,
    },
  };
};

export default Products;
