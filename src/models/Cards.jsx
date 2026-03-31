import React from 'react';
import { useInView } from 'react-intersection-observer';
import Card from './Card';
import Image1 from '/images/portfolio/image-nali-1.jpg';
import Image2 from '/images/portfolio/image-nali-2.jpg';
import Image3 from '/images/paineis/outdoor.webp';
import styles from '../styles/Cards.module.css';

function Cards() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={styles.portfolio}>
       <div ref={ref} className={`${styles.cards} ${inView ? styles.visible : ''}`}>
        <Card fundo={Image1} titulo="Identidade Visual" page="/identidade-visual" />
        <Card fundo={Image2} titulo="Website" page="/website" />
        <Card fundo={Image3} titulo="Publicidade" page="/publicidade" />
      </div>
    </div>
  );
}

export default Cards;
