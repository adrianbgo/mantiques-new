import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "@/components/Layout/Layout";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import { Product } from "./api/models/Product";
import { getAllProducts } from "@/lib/products";
import { GetStaticProps } from "next";
import HeroSection from "@/components/HeroSection/HeroSection";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import Testimonials from "@/components/Testimonials/Testimonials";
import AboutUs from "@/components/AboutUs/AboutUs";
import { useState } from "react";
import UnderConstruction from "@/components/UnderConstruction/UnderConstruction";

interface Props {
  products: Product[];
}

const heroButton = {
  link: "/",
  text: "Contact",
};

const images = [
  {
    src: "/images/book-detail.jpg",
    alt: "Book Detail",
  },
  {
    src: "/images/clarinet-lamp-1.jpg",
    alt: "Clarinet Lamp",
  },
];

const testimonials = [
  {
    name: "Pelican Steve",
    quote:
      "Mantiques did an amazing job at my home and I could not have asked for better results. Their craftsmanship is one of a kind.",
  },
  {
    name: "Max Conversion",
    quote:
      "Mantiques made it easy for me to find phenomenal art without having to compromise on price or beauty. Truly an excellent business.",
  },
  {
    name: "Eleanor Faint",
    quote:
      "Mantiques is a one of a kind business that really puts a premium on the needs of their clients. I highly recommend it to everyone I meet.",
  },
];

export default function Home({ products }: Props) {
  const [underConstruction, setUnderConstruction] = useState(true);
  return (
    <>
      {underConstruction ? (
        <UnderConstruction launchDate={new Date(2023, 4, 1, 12)} />
      ) : (
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
            <HeroSection
              title="Modern Antiques in Sandusky, OH"
              description="Mantiques in Sandusky, OH is a local business that specializes in custom-made furniture and home decor. With years of experience, they craft high-quality, unique pieces that are sure to add a touch of personality to your home."
              button={heroButton}
            />
            <main className={styles.main}>
              <ImageGallery images={images} interval={5000} />
              <Testimonials testimonials={testimonials} />
              <div className={`${styles.grid} ${styles["featured-products"]}`}>
                <h2 className={styles.subtitle}>Featured Products</h2>
                <p className={styles["subtitle-description"]}>
                  Check out some of our favorite finds!
                </p>
                <FeaturedProducts products={products} />
              </div>
            </main>
            <AboutUs />
          </div>
        </Layout>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const products = await getAllProducts();
  return {
    props: { products },
  };
};
