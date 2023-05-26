import { ObjectId } from "bson";
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import styles from "../styles/AddProduct.module.css";
import { Product } from "./api/models/Product";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<any>();
  const [featured, setFeatured] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setMessage("");

    if (!name || !description) return setError("All fields required");
    let _id = new ObjectId();
    let product: Product = {
      _id,
      name,
      description,
      image,
      price: parseFloat(price),
      published: false,
      featured,
    };

    let res = await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(product),
    });

    let data = await res.json();

    if (data.success) {
      setName("");
      setDescription("");
      setPrice("");
      setImage(null);

      return setMessage(data.message);
    } else {
      return setError(data.message);
    }
  };

  return (
    <Layout title="Add Product">
      <div className={styles["form-container"]}>
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles["form-label"]}>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              className={styles["form-input"]}
            />
          </label>
          <label className={styles["form-label"]}>
            Description:
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
              className={styles["form-textarea"]}
            />
          </label>
          <label className={styles["form-label"]}>
            Price:
            <input
              type="number"
              min="0"
              step="0.01"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              required
              className={styles["form-input"]}
            />
          </label>
          <label className={styles["form-label"]}>
            Image:
            <input
              type="file"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              required
              className={styles["form-input"]}
            />
          </label>
          <label className={styles["form-label"]}>
            Featured:
            <input
              type="checkbox"
              name="featured"
              id="featured"
              onChange={(event) => setFeatured(event.target.checked)}
              required
              className={styles.checkbox}
            />
          </label>
          <button type="submit" className={styles["form-button"]}>
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddProduct;
