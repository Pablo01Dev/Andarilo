import React from 'react';
import Modal from 'react-modal';
import styles from '../../styles/ModalComponent.module.css';

function ModalComponent({ isOpen, closeModal, images, title, link, description, mapUrl }) {
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
            <div style={{ marginTop: '2.5rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '500', marginBottom: '1rem', color: '#fff' }}>Localização</h3>
              <iframe
                src={mapUrl}
                width="100%" /* Força a ocupar toda a largura disponível */
                height="400" /* Altura excelente para visualização */
                style={{
                  border: 0,
                  borderRadius: '12px',
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
                  maxWidth: '600px'
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa do local: ${title}`}
              ></iframe>
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