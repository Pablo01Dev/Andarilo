import React from 'react';
import { useInView } from 'react-intersection-observer';
import Card from './Card';
import Image1 from '../assets/images/portfolio/image-nali-1.jpg';
import Image2 from '../assets/images/portfolio/image-nali-2.jpg';
import Image3 from '../assets/images/portfolio/image-nali-3.jpg';
import styles from '../styles/Cards.module.css';

function Cards() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={styles.portfolio}>
       <div ref={ref} className={`${styles.cards} ${inView ? styles.visible : ''}`}>
        <Card fundo={Image1} titulo="Identidade Visual" page="/andarilo/identidade-visual" />
        <Card fundo={Image2} titulo="Website" page="/andarilo/website" />
        <Card fundo={Image3} titulo="Outros" page="/andarilo/outros" />
      </div>
    </div>
  );
}

export default Cards;
