import React, { useState } from 'react';
import { Element } from 'react-scroll';
import SecondHeader from '../models/SecondHeader';
import CardProjetos from '../models/Portfolio/CardProjetos';
import Contact from '../models/Contact';
import Footer from '../models/Footer';
import ModalComponent from '../models/Portfolio/ModalComponent';
import { branding } from '../assets/projectData';

import styles from '../styles/IdentidadeVisual.module.css';

function IdentidadeVisual() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");

  const openModal = (images, title, description) => {
    setCurrentImages(images);
    setCurrentTitle(title);
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
          <p>Identidade Visual</p>
          <div className={styles.cardProjetos}>
            {branding.map(branding => (
              <CardProjetos
                key={branding.id}
                fundo={branding.fundo}
                titulo={branding.title}
                className={styles.cardProjetos}
                descricao={branding.description}
                onClick={() => openModal(branding.images, branding.title, branding.description)}
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
        title={currentTitle}
        description={currentDescription}
      />
    </div>
  );
}

export default IdentidadeVisual;
