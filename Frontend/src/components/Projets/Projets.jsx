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
          {error && <p>{error}</p>} {/* Affiche le message d'erreur en cas de problème */}

          {/* Swiper Carousel */}
          <Swiper
            spaceBetween={20}
            slidesPerView={3} // Nombre de cartes affichées à la fois
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            modules={[Navigation, Pagination, Scrollbar]}
          >
            {Cards.map((card) => (
              <SwiperSlide key={card.id}>
                <Card
                  image={card.img}
                  title={card.title}
                  description={card.description}
                  githubLink={card.github}
                  logo={card.logo}
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
