import './App.scss';
import Header from './components/Header/Header.jsx';
import Presentation from './components/Presentation/Presentation.jsx';
import Competence from './components/Competence/Competence.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {

  return (
    <>
    <Header/>
    <main>
      <Presentation/>
      <Competence/>
      <Contact/>
    </main>
    </>
  )
}

export default App
