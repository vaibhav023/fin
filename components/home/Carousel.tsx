// components/Carousel.
"use client"
import React, { useState, useEffect } from "react";
import styles from "@/styles/carousel.module.css";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [carouselImage, setCarouselImage] = useState<number[]>([]);

  const gotoNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    let leftIndex = (currentIndex - 1 + images.length) % images.length;
    let rightIndex = (currentIndex + 1) % images.length;
    let indexArr = [leftIndex, currentIndex, rightIndex];
    setCarouselImage(indexArr);
  }, [currentIndex]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {carouselImage.map((img, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              img === currentIndex ? styles.activeSlide : ""
            }`}
          >
            <img src={images[img]} alt={`Slide ${img}`} />
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={gotoNext}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
