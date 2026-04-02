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
                        O Andarilo é um estúdio de criação fundado por um trio de especialistas nas áreas de Identidade Visual, Desenvolvimento Web e Publicidade.<br></br>
                        <br></br>
                        Nossa missão vai além de executar projetos: nós construímos artefatos únicos. Unindo arte, código e estratégia de mercado, garantimos que cada entrega seja digna de admiração estética e impecável em sua performance.<br></br>
                        <br></br>
                        Afinal, a beleza e a eficiência precisam caminhar juntas. Não queremos que você precise escolher entre o belo e o funcional. <br></br>
                        <br></br>
                        Sabe aquela velha pergunta do biscoito: "vende mais porque é fresquinho ou é fresquinho porque vende mais?" Por aqui, nós preferimos os dois.<br></br>
                        <br></br>
                        Criamos soluções que são lembradas e convertem.
                    </p>

                </div>
            </div>
        </div>
    );
}

export default QuemSomos;
