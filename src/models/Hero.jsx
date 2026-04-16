// HeroBanner.js
import React from 'react';
import styles from '../styles/Hero.module.css'; // Crie esse novo arquivo
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp } from 'react-icons/fa';

function HeroBanner() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Link do WhatsApp com mensagem pré-definida
    const whatsappLink = "https://wa.me/+5521969487301?text=Olá!%20Tenho%20interesse%20em%20investir%20em%20publicidade.%20Gostaria%20de%20agendar%20uma%20conversa.";

    return (
        <div className={styles.baseHero}>
            <div ref={ref} className={`${styles.heroContainer} ${inView ? styles.visible : ''}`}>
                {/* Conteúdo do Texto à Esquerda */}
                <div className={styles.heroTextContent}>
                    <h1 className={styles.heroTitle}>Transforme Suas<br />Vendas Agora.</h1>
                    
                    <p className={styles.heroSubTitle}>
                        Pronto para um negócio mais visível, rentável e impactante? A <strong>[Nome da Sua Agência]</strong> é a escolha certa.
                    </p>
                    
                    
                    {/* Botão Call to Action (pílula) */}
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.heroButtonWrapper}>
                        <button className={styles.heroButton}>
                            SOLICITE UMA CONVERSA <FaWhatsapp />
                        </button>
                    </a>
                </div>

                {/* Conteúdo da Imagem à Direita */}
                <div className={styles.heroImageContent}>
                    <img 
                        src="/images/paineis/outdoor.webp" // Substitua pelo caminho da sua imagem
                        alt="Estrategista de marketing sorridente no telefone"
                        className={styles.heroImage}
                    />
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;