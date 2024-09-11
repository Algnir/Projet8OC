import ModalCard from "./Modal-Card.jsx"; // image, title, description, tag
import "./Competence.scss";
import ImageFrontend from "../../images/frontend.svg";
import ImageBackend from "../../images/nodejsStackedBlack.svg";
import ImageGestion from "../../images/google-lighthouse.svg";

function Competence() {
  return (
    <>
      <section id="competences">
        <div className="competence">
          <h2 className="competence-title">Compétences</h2>
          <div className="card-container">
            <ModalCard
              image={ImageFrontend}
              title="Création de site web dynamique"
              description="intégration web avec HTML-CSS, création de site web dynamique avec Javascript et React"
              tag="Frontend"
            />
            <ModalCard
              image={ImageBackend}
              title="Développement Back-end et liaison avec une base de donnée"
              description="Mise en place d'un CRUD de manière sécurisé, liaison avec base de donnée NoSQL MongoDB"
              tag="Backend"
            />
            <ModalCard
              image={ImageGestion}
              title="Optimisation des performances et du SEO"
              description="Optimisation des perfomances d'un site Web et le débugger, optimiser le référencement SEO grâce aux outils de google(lighthouse)"
              tag="Gestion"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Competence;
