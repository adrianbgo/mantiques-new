import OurTeam from "@/components/OurTeam/OurTeam";
import Layout from "../components/Layout/Layout";
import styles from "../styles/About.module.css";
import OurProcess from "@/components/OurProcess/OurProcess";
import Link from "next/link";
import Testimonials from "@/components/Testimonials/Testimonials";

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
const About = () => {
  return (
    <Layout title="About Mantiques">
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Mantiques</h1>
        <h2 className={styles.subtitle}>About Us</h2>
        <p className={styles.text}>
          Welcome to Mantiques Sandusky, where we specialize in transforming
          old, discarded items into unique and beautiful pieces that will add
          character to any space. <br />
          <br />
          Our mission is to provide sustainable and eco-friendly products that
          will delight our customers and support our local community.
        </p>
        <h3 className={styles.subtitle}>Our Story</h3>
        <p className={styles.text}>
          Founded in 2021 by Kimberly Go and Mark Bowman, Mantiques started as a
          passion project in her garage, transforming old furniture and decor
          into something new and beautiful.
          <br />
          <br />
          After receiving a lot of interest and positive feedback from friends
          and family, Kim decided to turn her hobby into a business. Since then,
          the business has grown and expanded, providing unique upcycled
          antiques to customers across the country.
          <br />
          <br />
          We pride ourselves on our commitment to sustainability and our passion
          for creating beautiful pieces that will last a lifetime.
        </p>
        <h3 className={styles.subtitle}>Our Team</h3>
        <OurTeam />
        <h3 className={styles.subtitle}>Our Process</h3>
        <OurProcess />
        <Testimonials testimonials={testimonials} />
        <h3 className={styles.subtitle}>Join the Mantiques Movement Today!</h3>
        <Link className={styles.button} href="/products">
          Shop Now
        </Link>
      </div>
    </Layout>
  );
};

export default About;
