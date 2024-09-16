import "./Banner.scss";
import ParticlesComponent from './particles.jsx';

function Banner() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="accueil">
      <div className="particles-container">
      <ParticlesComponent id="particles" />
      </div>
      <div className="banner">
        <h2>Bienvenue sur mon Portfolio de développeur web</h2>
      </div>
      <div
        className="scroll"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("presentation");
        }}
      >
        <p>⮟</p>
      </div>
    </section>
  );
}

export default Banner;
