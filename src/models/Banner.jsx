import React from "react";
import { useInView } from 'react-intersection-observer';
import lata from '../assets/images/lata.png';
import styles from '../styles/Banner.module.css';


function Banner() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerOverlay}>
        <img src={lata} alt="" />
      </div>
      <div ref={ref} className={`${styles.corpo} ${inView ? styles.visible : ''}`}>
        <h1>O Design comunica quando <br /> palavras não podem ser ditas.</h1>
        <h2>
          As marcas que se destacam no crescimento são aquelas que apostam no design, 
          com foco especial em uma identidade visual forte e marcante.
        </h2>
      </div>
    </div>
  );
  
}

export default Banner;
