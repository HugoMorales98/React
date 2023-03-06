import './App.css';

import ResponsiveAppBar from './Components/AppBar/AppBar'
import APOD from './Components/APOD/APOD'
import Astronauts from './Components/Astronauts/Astronauts';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar.js';

function App() {

const data = {
  title: 'Hola Espacio',
  text: 'Holi ayuda en el espacio no hay oxigeno'
}

  return (
    <div className="App">
            <ResponsiveAppBar />            
            <Navbar />
            <Main {...data}/>
            <APOD />
            <Astronauts />
    </div>
  );
}

export default App;
