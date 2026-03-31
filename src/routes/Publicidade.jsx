import React, { useState } from 'react';
import { Element } from 'react-scroll';
import SecondHeader from '../models/SecondHeader';
import CardProjetos from '../models/Portfolio/CardProjetos';
import Contact from '../models/Contact';
import Footer from '../models/Footer';
import ModalComponent from '../models/Portfolio/ModalComponent';
import { paineis } from '../assets/projectData';

import styles from '../styles/IdentidadeVisual.module.css';

function Publicidade() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentLink, setCurrentLink] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");

  const openModal = (images, title, link, description) => {
    setCurrentImages(images);
    setCurrentTitle(title);
    setCurrentLink(link);
    setCurrentDescription(description);
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
            {paineis.map(paineis => (
              <CardProjetos
                key={paineis.id}
                fundo={paineis.fundo}
                titulo={paineis.title}
                className={styles.cardProjetos}
                descricao={paineis.description}
                onClick={() => openModal(paineis.images, paineis.title, paineis.link, paineis.description)}
              />
            ))}
          </div>
        </div>
      </div>
      <Element name="contact" className="element">
        <Contact />
      </Element>
      <Footer />
      <ModalComponent
        isOpen={modalIsOpen}
        closeModal={closeModal}
        images={currentImages}
        link={currentLink}
        title={currentTitle}
        description={currentDescription}
      />
    </div>
  );
}

export default Publicidade;
