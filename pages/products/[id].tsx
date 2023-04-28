import { getAllProductIds, getProduct } from "@/lib/products";
import styles from "../../styles/Product.module.css";
import React, { useContext } from "react";
import Image from "next/image";
import { Product } from "../api/models/Product";
import { CartContext } from "@/context/CartContext";
import Layout from "@/components/Layout/Layout";

interface IProduct {
  productData: Product;
}

const Product = ({ productData }: any) => {
  const { addProduct } = useContext(CartContext);
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image
            src="/images/vw-bus-front.png"
            alt={productData.name}
            height={500}
            width={500}
            className="active"
          />
        </div>
        <div className={styles.right}>
          <div className={styles.description}>
            <h1>{productData.name}</h1>
            <p>{productData.description}</p>
          </div>
          <div className={styles.price}>
            <span>{productData.price}</span>
            <button
              className={styles.buyNow}
              onClick={() => addProduct(productData)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await getAllProductIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }: any) => {
  const product = JSON.parse(JSON.stringify(await getProduct(params.id)));
  const productData = product.product;
  return {
    props: {
      productData,
    },
  };
};

export default Product;
