import React from "react";
import { useInView } from 'react-intersection-observer';
import Image1 from '/images/team.png';
import styles from '../styles/QuemSomos.module.css';

function QuemSomos() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className={styles.fundo}>
            <div ref={ref} className={`${styles.corpo} ${inView ? styles.visible : ''}`}>
                <h2>Quem somos?</h2>
                <div className={styles.personContent}>
                    <img src={Image1} alt="team" />
                    <p>
                        O Andarilo é um estúdio de publicidade fundado por especialistas nas áreas de Identidade Visual, Desenvolvimento Web e Publicidade.<br></br>
                        <br></br>
                        Nossa missão vai além de executar projetos: nós unimos arte, algoritmos e estratégia de mercado, para criar soluções que são lembradas e convertem.<br></br>
                        <br></br>
                        Sabe aquela velha pergunta do biscoito: "vende mais porque é fresquinho ou é fresquinho porque vende mais?" Por aqui, nós não escolhemos um lado. Preferimos os dois: o visual que  converte e faz ser lembrado.
                    </p>

                </div>
            </div>
        </div>
    );
}

export default QuemSomos;
