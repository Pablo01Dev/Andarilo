import React from 'react';
import Modal from 'react-modal';
import styles from '../../styles/ModalComponent.module.css';

function ModalComponent({ isOpen, closeModal, images, title, link, description, mapUrl, anunciar }) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Detalhes do Projeto"
        className={styles.modal}
        overlayClassName={styles.Overlay}
      >
        <div className={styles.modalContainer}>
          <h1>{title}</h1>
          <a href={link} target='_blank' rel="noreferrer">{link}</a>

          {String(anunciar) === "1" && (
            <div style={{ margin: '40px', textAlign: 'center' }}>
              <button
                className={styles.announceButton}
                onClick={() => window.open(`https://wa.me/5521969487301?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20painel%20${title}`)}
              >
                Anuncie Aqui
              </button>
            </div>
          )}
          <div className={styles.imageContainer}>
            {images.length > 0 ? (
              images.map((image, index) => (
                <div key={index} className={styles.imageItem}>
                  <img src={image} alt={`Slide ${index}`} />
                </div>
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>

          <p>{description}</p>

          {mapUrl && (
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 style={{ fontSize: '26px', fontWeight: '500', color: '#2b2b2b' }}>Localização</h3>
              <iframe
                src={mapUrl}
                width="100%"
                height="300"
                style={{
                  border: 0,
                  borderRadius: '12px',
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
                  maxWidth: '720px'
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa do local: ${title}`}
              ></iframe>
            </div>
          )}

          {String(anunciar) === "1" && (
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
              <button
                className={styles.announceButton}
                onClick={() => window.open(`https://wa.me/5521969487301?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20painel%20${title}`)}
              >
                Anuncie Aqui
              </button>
            </div>
          )}

        </div>
      </Modal>
      {isOpen && (
        <button
          className={styles.modalButton}
          onClick={closeModal}
        >
          Fechar
        </button>
      )}
    </div>
  );
}

export default ModalComponent;