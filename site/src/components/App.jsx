import { useState } from 'react'
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import StartPage from './StartPage.jsx';

function App() {
  const [startPageActive, setStartPageActive] = useState(true);
  const [descriptionPageActive, setDescriptionPageActive] = useState(false);
  const [projectPageActive, setProjectPageActive] = useState(false);

  const [activeProject, setActiveProject] = useState('');
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
    { projectPageActive ?
      <div className="container">
        <Header activateDescription={activateDescription} activateProjects={activateProjects} />
          <Main activeProject={activeProject}/>
        <Footer />
      </div>
    :
      <StartPage setActiveProject={setActiveProject} activateProjects={activateProjects}/>
    }
    </>
  )
}

export default App;
