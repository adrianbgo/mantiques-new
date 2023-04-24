import Link from "next/link";
import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

type ICartContext = {
  totalItems: number;
};

const Header: React.FC = () => {
  const { totalItems } = useContext<ICartContext>(CartContext);
  return (
    <header className={styles.header}>
      <Logo text="Mantiques" />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Link href="/cart" className={styles.cart}>
        <FaShoppingCart />
        <span className={styles.cartCount}>{totalItems}</span>
      </Link>
    </header>
  );
};

export default Header;
