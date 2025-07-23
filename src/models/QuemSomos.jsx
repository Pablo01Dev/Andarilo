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
                        Sou Pablo Guimarães, e o Andarilo é a personificação do meu espírito criativo e explorador.<br /><br/> 
                        No Andarilo, cada criação é uma jornada única, uma oportunidade de expressar uma visão com técnica e artística.<br /><br/>
                        Aqui, buscamos transmitir essa jornada não como uma simples tarefa, mas como uma expressão autêntica de criatividade e conversão.
                        </p>

                </div>
            </div>
        </div>
    );
}

export default QuemSomos;
