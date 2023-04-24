import { useState, useEffect } from "react";
import styles from "./ImageGallery.module.css";
import Image from "next/image";

type Image = {
  src: string;
  alt: string;
};

type ImageGalleryProps = {
  images: Image[];
  interval: number;
};

const ImageGallery = ({ images, interval }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={styles.gallery}>
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        fill
        className={styles.image}
      />
    </div>
  );
};

export default ImageGallery;
