import React, { useState } from 'react';
import './App.scss';
import Main from './containers/Main'
import Welcome from './components/welcome'
import NotFound from './components/notFound'
import AOS from 'aos'
import 'aos/dist/aos.css';
import UIfx from 'uifx';
import Sound from './sounds/switch-click.mp3'
import DelayLink from 'react-delay-link';

import { withRouter, Route, Switch, Redirect } from 'react-router-dom'

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
      {!load ? 
      <DelayLink delay={3000} to="/" replace={false}>
        <Welcome load={load} handleLoad={handleLoad} />
      </DelayLink>:
      <main>
        <Switch>
          <Route exact={true} path="/" component={Main} />
        </Switch>
      </main>
      }
    </div>
  );
}

export default App;
