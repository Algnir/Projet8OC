import './App.scss';
import Header from './components/Header/Header.jsx';
import Banner from './components/Banner/Banner.jsx';
import Presentation from './components/Presentation/Presentation.jsx';
import Competences from './components/Competence/Competence.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {

  return (
    <>
    <main>
      <Banner/>
      <Header/>
      <Presentation/>
      <Competences/>
      <Contact/>
    </main>
    </>
  )
}

export default App
