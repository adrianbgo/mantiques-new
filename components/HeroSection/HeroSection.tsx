import React from "react";
import styles from "./HeroSection.module.css";

interface HeroProps {
  title: string;
  description: string;
  button?: {
    text: string;
    link: string;
  };
}

const HeroSection: React.FC<HeroProps> = ({ title, description, button }) => {
  return (
    <div className={styles.heroSection}>
      <h1 className={styles.heroTitle}>{title}</h1>
      <p className={styles.heroDescription}>{description}</p>
      {button && (
        <a href={button.link} className={styles.heroButton}>
          {button.text}
        </a>
      )}
    </div>
  );
};

export default HeroSection;
