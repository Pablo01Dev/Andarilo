import React from "react";
import { useInView } from 'react-intersection-observer';
import Image1 from '../assets/images/pablo-guima.jpg';
import styles from '../styles/QuemSomos.module.css';

function QuemSomos() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className={styles.fundo}>
            <div ref={ref} className={`${styles.corpo} ${inView ? styles.visible : ''}`}>
                <h2>Quem sou?</h2>
                <div className={styles.personContent}>
                    <img src={Image1} alt="pablo-guimarães" />
                    <p>
                        O Andarilo é a personificação do espírito criativo e exploratório do estúdio de design, fundado por Pablo Guimarães.<br />
                        <br/>
                        Representa a essência do constante caminhar entre ideias, desejos, caminhos e paixões que guia cada projeto.<br />
                        <br/>
                        No Andarilo, cada criação é uma jornada única, uma oportunidade de expressar uma visão de forma técnica e artística.<br />
                        <br/>
                        Cada projeto é tratado como uma trilha exploratória, onde cada passo é dado com intenção e paixão.<br />
                        <br/>
                        Aqui, buscamos transmitir essa jornada não apenas como uma tarefa, mas como uma expressão autêntica de criatividade e inovação.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default QuemSomos;
