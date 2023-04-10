import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">Store</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>

        <p>Mantiques &copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
