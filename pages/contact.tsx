import Layout from "../components/Layout/Layout";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <form className={styles.form}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />

          <button type="submit">Send</button>
        </form>
      </div>
    </Layout>
  );
}
