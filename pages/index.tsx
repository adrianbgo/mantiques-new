import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Home.module.css";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Mantiques - Vintage Finds and Treasures</title>
        <meta
          name="description"
          content="Shop for vintage treasures and unique finds at Mantiques."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to Mantiques</h1>
          <p className={styles.description}>
            At Mantiques, we specialize in finding unique and interesting
            vintage items from all over the world. Whether you&apos;re a
            collector or just looking for something special for your home,
            we&apos;ve got you covered.
          </p>

          <div className={`${styles.grid} ${styles["featured-products"]}`}>
            <h2 className={styles.subtitle}>Featured Products</h2>
            <p className={styles["subtitle-description"]}>
              Check out some of our favorite finds!
            </p>

            {/* insert featured products here */}
          </div>
        </main>
      </div>
    </Layout>
  );
}
