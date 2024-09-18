import React, { useState, useEffect } from "react";
import "./Projets.scss";
import Card from "./Card.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

function Projets() {
  const [Cards, setCards] = useState([]);
  const [error, setError] = useState("");

  const fetchCards = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/projects/`);
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }
      const data = await response.json();
      setCards(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <>
      <section id="projets">
        <div className="projets">
          <h2 className="projets-title">Mes Projets</h2>
          {error && <p>{error}</p>}{" "}
          {/* Affiche le message d'erreur en cas de problème */}
          {/* Swiper Carousel */}
          <Swiper
            spaceBetween={20}
            slidesPerView={3} // nombre de cards affiché de base
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            modules={[Navigation, Pagination, Scrollbar]}
            breakpoints={{
              // Quand la largeur de la fenêtre est >= 1024px
              1025: {
                slidesPerView: 3, // Affiche 3 cards
              },
              // Quand la largeur de la fenêtre est entre 768px et 1024px
              769: {
                slidesPerView: 2, // Affiche 2 cards
              },
              // Quand la largeur de la fenêtre est < 768px
              0: {
                slidesPerView: 1, // Affiche 1 card
              },
            }}
          >
            {Cards.map((card) => (
              <SwiperSlide key={card.id}>
                <Card
                  image={card.img}
                  title={card.title}
                  description={card.description}
                  githubLink={card.github}
                  logo={card.logo}
                  context={card.modal.context}
                  learned={card.modal.learned}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Projets;
