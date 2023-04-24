import React from "react";
import styles from "./OurTeam.module.css";
import Image from "next/image";
import FlipCard from "../FlipCard/FlipCard";

const OurTeam = () => {
  return (
    <section className={styles.team}>
      <FlipCard
        imgSrc="/images/book-detail.jpg"
        imgAlt="Kim Go"
        title="Kim Go"
        subtitle="Founder"
        description="Kim Go is the founder of our company. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <FlipCard
        imgSrc="/images/book-detail.jpg"
        imgAlt="Mark Bowman"
        title="Mark Bowman"
        subtitle="Founder"
        description="Mark Bowman is the founder of our company. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </section>
  );
};

export default OurTeam;
