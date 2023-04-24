import React from "react";
import Image from "next/image";
import styles from "./FlipCard.module.css";

interface IFlipCard {
  imgSrc: string;
  imgAlt: string;
  title: string;
  subtitle: string;
  description: string;
}

const FlipCard = ({
  imgSrc,
  imgAlt,
  title,
  subtitle,
  description,
}: IFlipCard) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div className={`${styles.face} ${styles.front}`}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            className={styles.image}
            width={150}
            height={150}
          />
          <h2 className={styles.name}>{title}</h2>
          <h3 className={styles.title}>{subtitle}</h3>
        </div>
        <div className={`${styles.face} ${styles.back}`}>
          <p className={styles.bio}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
