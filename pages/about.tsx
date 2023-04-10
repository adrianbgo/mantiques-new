import Layout from "../components/Layout/Layout";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>About Mantiques</h1>
        <p className={styles.description}>
          Mantiques is a company that specializes in unique and vintage items
          for collectors and enthusiasts. Our products range from classic cars
          to rare watches, and we pride ourselves on providing the highest
          quality items for our customers. Our team of experts carefully curate
          each item to ensure that it meets our high standards of excellence.
        </p>
      </div>
    </Layout>
  );
};

export default About;
