import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Presentation from "./components/Presentation/Presentation.jsx";
import Projets from "./components/Projets/Projets.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  return (
    <>
      <main>
        <Banner />
        <Header />
        <Presentation />
        <Projets />
        <Contact />
      </main>
    </>
  );
}

export default App;
