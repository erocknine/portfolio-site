import React, { useState } from 'react';
import './App.scss';






import Main from './containers/Main'
import Navbar from './containers/Navbar'
import Welcome from './components/welcome'
import AOS from 'aos'
import 'aos/dist/aos.css';
import UIfx from 'uifx';
import Sound from './sounds/switch-click.mp3'

function App() {

  AOS.init()
  const switchClick = new UIfx(Sound);

  const [load, setLoad] = useState(false)

  const handleLoad = () => {
    switchClick.play()
    setTimeout(() => setLoad(true), 3000)
  }

  return (
    <div className="App">
      {!load ? <Welcome load={load} handleLoad={handleLoad}/>:
      <main>
        <Navbar/>
        <Main/>
      </main>
      }
    </div>
  );
}

export default App;
