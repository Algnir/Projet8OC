import "./Presentation.scss";
import Image from "../../images/pp-Card.png";
function Presentation() {
  return (
    <>
      <section id="presentation">
        <div className="presentation">
          <h2>Présentation</h2>
          <div className="presentation-container">
            <img
              className="presentation-image"
              src={Image}
              alt="Presentation"
            />
            <div className="presentation-text">
              <h3>Clovis PATOUÉ, développeur web.</h3>
              <p>
                Je crée des sites dynamiques avec HTML, CSS, JavaScript, et
                React. J'ai aussi des bases en backend avec Node.js et
                Express.js. Toujours envie de découverte et d'apprendre ,j'aime
                transformer des idées en projets concrets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Presentation;
