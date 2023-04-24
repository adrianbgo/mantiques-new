import { useContext, useState } from "react";
import styles from "../styles/ShoppingCart.module.css";
import Image from "next/image";
import { Product } from "./api/models/Product";
import { CartContext } from "@/context/CartContext";
import Layout from "@/components/Layout/Layout";

const ShoppingCart = () => {
  const { items, totalItems, totalPrice, addProduct, removeProduct } =
    useContext(CartContext);

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Shopping Cart</h1>
        {items.length === 0 ? (
          <p className={styles.empty}>Your cart is empty</p>
        ) : (
          <div className={styles.items}>
            {items.map((item: Product, index: number) => (
              <div key={index} className={styles.item}>
                <Image
                  src={item.image}
                  alt={item.name}
                  className={styles.image}
                  width={200}
                  height={200}
                />
                <div className={styles.details}>
                  <h2 className={styles.name}>{item.name}</h2>
                  <p className={styles.price}>${item.price.toFixed(2)}</p>
                  <button
                    className={styles.remove}
                    onClick={() => removeProduct(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className={styles.total}>
          <p>Total:</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <button
          className={styles.checkout}
          onClick={() => (window.location.href = "/checkout")}
        >
          Checkout
        </button>
      </div>
    </Layout>
  );
};

export default ShoppingCart;
