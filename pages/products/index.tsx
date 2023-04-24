import { GetStaticProps } from "next";
import { getAllProducts } from "../../lib/products";
import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Product } from "../api/models/Product";
import styles from "../../styles/Products.module.css";

interface Props {
  products: Product[];
}

const Products: React.FC<Props> = ({ products }) => {
  return (
    <Layout title="Mantiques - Products">
      <h1 className={styles.header}>Products</h1>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product._id.toString()} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const products = await getAllProducts();
  return {
    props: { products },
  };
};

export default Products;
