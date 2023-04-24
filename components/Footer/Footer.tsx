import { useState } from "react";
import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import Link from "next/link";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: handle submitting email to newsletter service
    console.log(`Submitting email: ${email}`);
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <h3>Sign up for our newsletter</h3>
        <form>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className={styles.links}>
        <h3>Links</h3>
        <ul>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
      <div className={styles.social}>
        <h3>Follow us</h3>
        <ul>
          <li>
            <Link href="#">
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaPinterest />
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.address}>
        <h3>Address</h3>
        <p>123 Main Street</p>
        <p>Suite 101</p>
        <p>Anytown, USA 12345</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </footer>
  );
};

export default Footer;
