import React, { useState } from "react";
import githubsvg from "../../images/github.svg";
import Modal from "react-modal";

const Card = ({
  image,
  title,
  description,
  githubLink,
  logo,
  context,
  learned,
  alt,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const gitOpen = () => {
    window.open(githubLink, "_blank");
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="card" onClick={openModal}>
        <img src={image} className="card-image" alt={alt} />
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="git-button" onClick={gitOpen}>
          <img src={githubsvg} alt="github icon" />
          Github
        </button>
        <div className="logo-container">
          {logo.map((item, index) => {
            const logoName = item.split("/").pop().split(".")[0]; 
            return (
              <img
                key={index}
                src={item}
                className="logo"
                alt={`logo de ${logoName}`}
              />
            );
          })}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h3>{title}</h3>
        <h4>Contexte du projet</h4>
        <p>{context}</p>
        <h4>Ce que j'ai appris</h4>
        <p>{learned}</p>
        <h4>Technologies utilisées</h4>
        <div className="logo-container">
          {logo.map((item, index) => {
            const logoName = item.split("/").pop().split(".")[0];
            return (
              <img
                key={index}
                src={item}
                className="logo-modal"
                alt={`logo de ${logoName}`}
              />
            );
          })}
        </div>
        <div className="button-container">
          <button className="git-button" onClick={gitOpen}>
            <img src={githubsvg} alt="github icon" />
            Github
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Card;
