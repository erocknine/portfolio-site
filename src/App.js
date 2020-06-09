import React, { useState, useEffect} from 'react';
import './App.scss';
import Main from './containers/Main'
import Navbar from './containers/Navbar'
import Welcome from './components/welcome'

function App() {

  const [load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoad(false), 1500);
  });

  return (
    
    <div className="App">
      {load ? <Welcome/>:
      <main>
        <Navbar/>
        <Main/>
      </main>
      }
    </div>
  );
}

export default App;
