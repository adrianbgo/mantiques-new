import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "./Logo.module.css";
interface LogoProps {
  text: string;
  image?: string;
}

const Logo: React.FC<LogoProps> = ({ text, image }) => {
  return image ? (
    <Image src={image} alt={text} width={150} height={150} />
  ) : (
    <Link href="/" className={styles.logoText}>
      {text}
    </Link>
  );
};

export default Logo;
