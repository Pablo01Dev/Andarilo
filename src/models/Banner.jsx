import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Banner.module.css';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef([]);
  const dotsRef = useRef([]);
  const slideInterval = useRef(null);

  const slides = [
    'https://github.com/Pablo01Dev/Andarilo/blob/main/src/assets/images/parceria.png',
    'https://github.com/Pablo01Dev/Andarilo/blob/main/src/assets/images/parceria.png',
    'https://github.com/Pablo01Dev/Andarilo/blob/main/src/assets/images/parceria.png'
  ];

  const showSlide = (n) => {
    const newIndex = (n + slides.length) % slides.length;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  useEffect(() => {
    // Autoplay
    slideInterval.current = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval.current);
  }, [currentSlide]); // Atualiza sempre que `currentSlide` muda

  return (
    <div className={styles['banner-container']}>
      {slides.map((src, index) => (
        <div
          key={index}
          ref={(el) => (slidesRef.current[index] = el)}
          className={`${styles['banner-slide']} ${currentSlide === index ? styles.active : ''}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      <div className={styles['banner-content']}>
        <h2>Título do Banner</h2>
        <p>Subtítulo do Banner</p>
      </div>

      <div className={styles['banner-nav']}>
        {slides.map((_, index) => (
          <div
            key={index}
            ref={(el) => (dotsRef.current[index] = el)}
            className={`${styles['banner-nav-dot']} ${currentSlide === index ? styles.active : ''}`}
            onClick={() => {
              clearInterval(slideInterval.current);
              showSlide(index);
              slideInterval.current = setInterval(nextSlide, 3000); // Reinicia autoplay
            }}
          />
        ))}
      </div>
    </div>
  );
};

Banner.propTypes = {
  slides: PropTypes.array
};

export default Banner;
