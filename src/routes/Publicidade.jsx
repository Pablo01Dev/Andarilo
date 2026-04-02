import React, { useState } from 'react';
import { Element } from 'react-scroll';
import SecondHeader from '../models/SecondHeader';
import CardProjetos from '../models/Portfolio/CardProjetos';
import Contact from '../models/Contact';
import Footer from '../models/Footer';
import ModalComponent from '../models/Portfolio/ModalComponent';
import { paineis } from '../assets/projectData';

import styles from '../styles/Publicidade.module.css';

function Publicidade() {
  const [modalIsOpen, setModalIsOpen] = useState(false);


  const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  const openModal = (painel) => {
    setProjetoSelecionado(painel);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <SecondHeader />
      <div className={styles.conteinerProjetos}>
        <div className={styles.projetos}>
          <p>Publicidade</p>
          <div className={styles.cardProjetos}>
            {paineis.map(painel => (
              <CardProjetos
                key={painel.id}
                fundo={painel.fundo}
                titulo={painel.title}
                className={styles.cardProjetos}
                descricao={painel.description}
                onClick={() => openModal(painel)}
              />
            ))}
          </div>
        </div>
      </div>
      <Element name="contact" className="element">
        <Contact />
      </Element>
      <Footer />

      {projetoSelecionado && (
        <ModalComponent
          isOpen={modalIsOpen}
          closeModal={closeModal}
          images={projetoSelecionado.images}
          link={projetoSelecionado.link}
          title={projetoSelecionado.title}
          description={projetoSelecionado.description}
          mapUrl={projetoSelecionado.mapUrl}
          anunciar={projetoSelecionado.anunciar}
        />
      )}
    </div>
  );
}

export default Publicidade;