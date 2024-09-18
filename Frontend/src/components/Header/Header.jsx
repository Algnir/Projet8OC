import "./Header.scss";
function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header>
      <h1>Clovis PATOUÉ</h1>
      <nav>
        <ul>
          <li id="btn-accueil">
            <a
              href="#accueil"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("accueil");
              }}
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#presentation"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("presentation");
              }}
            >
              Présentation
            </a>
          </li>
          <li>
            <a
              href="#projets"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projets");
              }}
            >
              Mes projets
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Algnir?tab=repositories"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
