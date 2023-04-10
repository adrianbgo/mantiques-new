import Image from "next/image";
import React from "react";
import styles from "../styles/ProductCard.module.css";

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.price}>${price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
