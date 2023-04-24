import React from "react";
import styles from "./AboutUs.module.css";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>About Us</h3>
      <p className={styles.content}>
        At Mantiques, we believe that every piece of scrap has a story to tell.
        That&apos;s why were dedicated to rescuing vintage and antique pieces
        from being forgotten and giving them a new life through careful
        upcycling and repurposing. <br />
        <br />
        Discover our full story and meet our team on the About Page.
      </p>
      <Link className={styles.cta} href="/about">
        Learn More
      </Link>
    </div>
  );
};

export default AboutUs;
