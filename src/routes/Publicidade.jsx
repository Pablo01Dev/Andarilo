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
  const [currentImages, setCurrentImages] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentLink, setCurrentLink] = useState("");
  const [currentDescription, setCurrentDescription] = useState("");
  
  // 1. Criar o estado para o mapa
  const [currentMapUrl, setCurrentMapUrl] = useState(""); 

  // 2. Atualizar a função openModal para receber o mapa
  const openModal = (images, title, link, description, mapUrl) => { 
    setCurrentImages(images);
    setCurrentTitle(title);
    setCurrentLink(link);
    setCurrentDescription(description);
    setCurrentMapUrl(mapUrl); // Define a URL do mapa
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
                onClick={() => openModal(
                  painel.images, 
                  painel.title, 
                  painel.link, 
                  painel.description, 
                  painel.mapUrl
                )}
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
        mapUrl={currentMapUrl}
      />
    </div>
  );
}

export default Publicidade;