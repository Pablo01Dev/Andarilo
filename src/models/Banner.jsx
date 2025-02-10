import React, { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Typed from 'typed.js';
import lata from '../assets/images/lata.png';
import styles from '../styles/Banner.module.css';

function Banner() {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Isso garante que o efeito seja disparado apenas uma vez
    threshold: 0.1,     // Define quando o efeito será disparado (10% visível)
  });

  useEffect(() => {
    if (inView) {
      // Inicializa o Typed.js apenas quando o Banner entra em vista
      const options = {
        strings: [
          "O Design comunica quando palavras não podem ser ditas."
        ],
        typeSpeed: 50, // Ajuste conforme necessário
        startDelay: 0,
        loop: false,   // Não vai repetir a animação
        showCursor: false,
      };

      // Verifica se o Typed.js não foi inicializado já
      const typedElement = document.getElementById("typed-output");
      if (typedElement) {
        new Typed(typedElement, options); // Aplica o efeito de digitação
      }
    }
  }, [inView]);  // Dependência no inView, só dispara quando o banner entra na tela

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerOverlay}>
        <img src={lata} alt="Lata" className={styles.lataImage} />
      </div>
      <div ref={ref} className={`${styles.corpo} ${inView ? styles.visible : ''}`}>
        <h1 id="typed-output"></h1> {/* Aqui é onde o texto será digitado */}
        <h2 className={inView ? styles.fadeIn : ''}> {/* Adicionando animação de fade-in ao h2 */}
          As marcas que mais crescem investem em design, priorizando uma identidade visual forte e marcante.
        </h2>
      </div>
    </div>
  );
}

export default Banner;
