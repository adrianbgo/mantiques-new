import Layout from "../components/Layout/Layout";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <Layout title="About Mantiques">
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Mantiques</h1>
        <p className={styles.text}>
          At Mantiques, we specialize in bringing you the best in vintage and
          antique items from around the world. Our passion for unique and
          collectible objects is what drives us to find the best pieces and
          share them with you.
        </p>
        <p className={styles.text}>
          Our selection of items is carefully curated to offer you a wide range
          of options to fit any taste and budget. Whether you&apos;re a seasoned
          collector or just starting out, we have something for everyone.
        </p>
        <p className={styles.text}>
          We believe that every object has a story to tell, and we love learning
          about the history and provenance of each piece in our collection. We
          take pride in providing you with as much information as possible about
          each item, so you can make an informed decision and appreciate the
          object for years to come.
        </p>
        <p className={styles.text}>
          We&apos;re always on the lookout for new and exciting items to add to
          our collection, and we welcome you to come visit us at our store or
          browse our online inventory. Our friendly and knowledgeable staff are
          always available to answer any questions you may have and help you
          find the perfect piece to add to your collection.
        </p>
        <p className={styles.text}>
          Thank you for choosing Mantiques for your vintage and antique needs.
          We look forward to sharing our love of unique and collectible items
          with you.
        </p>
      </div>
    </Layout>
  );
};

export default About;
