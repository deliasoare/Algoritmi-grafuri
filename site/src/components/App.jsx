import { useState } from 'react'
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import StartPage from './StartPage.jsx';

function App() {
  const [startPageActive, setStartPageActive] = useState(true);
  const [descriptionPageActive, setDescriptionPageActive] = useState(false);
  const [projectPageActive, setProjectPageActive] = useState(false);

  const activateDescription = () => {
    setStartPageActive(false);
    setDescriptionPageActive(true);
  }
  const activateProjects = () => {
    setStartPageActive(false);
    setProjectPageActive(true);
  }

  return (
    <>
    { descriptionPageActive || projectPageActive ?
      <div className="container">
        <Header />
        {descriptionPageActive ?
          <Main /> // desc
          : 
          <Main /> // project
        }
        <Footer />
      </div>
    :
      <StartPage activateDescription={activateDescription} activateProjects={activateProjects}/>
    }
    </>
  )
}

export default App
