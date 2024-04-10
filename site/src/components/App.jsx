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
    setProjectPageActive(false);
  }
  const activateProjects = () => {
    setStartPageActive(false);
    setDescriptionPageActive(false);
    setProjectPageActive(true);
  }

  return (
    <>
    { descriptionPageActive || projectPageActive ?
      <div className="container">
        <Header activateDescription={activateDescription} activateProjects={activateProjects}/>
        {descriptionPageActive ?
          <>
          description
          <Main /> 
          </>
          : 
          <>
          projects
          <Main />
          </>
        }
        <Footer />
      </div>
    :
      <StartPage activateDescription={activateDescription} activateProjects={activateProjects}/>
    }
    </>
  )
}

export default App;
