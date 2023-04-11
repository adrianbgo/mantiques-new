import { Product } from "@/pages/api/models/Product";
import Image from "next/image";
import React from "react";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.price}>${product.price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
