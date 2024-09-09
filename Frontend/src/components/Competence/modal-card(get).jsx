import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Card from "./Card.jsx";

const ModalCard = ({ tag, image, title, description }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [filteredCards, setFilteredCards] = useState([]); // État pour stocker les cartes filtrées
  const [error, setError] = useState(null); // État pour gérer les erreurs

  const openModal = () => {
    setModalIsOpen(true);
    fetchCardsByTag(); // Récupérer les cartes lors de l'ouverture du modal
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const fetchCardsByTag = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/projects/${tag}`); 
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
      const data = await response.json();
      setFilteredCards(data);
    } catch (error) {
      setError(error.message); 
    }
  };

  return (
    <>
      <div onClick={openModal} className="card">
        <img src={image} alt={title} className="card-image" />
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        {error && <p>{error}</p>} {/* Affiche le message d'erreur en cas de problème */}
        {filteredCards.map((card) => (
          <Card
            key={card.id}
            image={card.img}
            title={card.title}
            description={card.description}
            githubLink={card.github}
          />
        ))}
      </Modal>
    </>
  );
};

export default ModalCard;
