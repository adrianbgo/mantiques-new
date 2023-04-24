import React from "react";
import styles from "./OurProcess.module.css";
import FlipCard from "../FlipCard/FlipCard";

const OurProcess = () => {
  return (
    <div className={styles.process}>
      <FlipCard
        imgSrc="/images/book-detail.jpg"
        imgAlt="Step One"
        title="Step 1"
        subtitle=""
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tortor."
      />
      <FlipCard
        imgSrc="/images/book-detail.jpg"
        imgAlt="Step Two"
        title="Step 2"
        subtitle=""
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tortor."
      />
      <FlipCard
        imgSrc="/images/book-detail.jpg"
        imgAlt="Step Three"
        title="Step 3"
        subtitle=""
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tortor."
      />
    </div>
  );
};

export default OurProcess;
