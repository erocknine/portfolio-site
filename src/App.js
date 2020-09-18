import React, { useState } from 'react';
import './App.scss';
import Main from './containers/Main';
import Welcome from './components/welcome';
import { BlogPage } from './components/blogs/blogPage';
import NotFound from './components/notFound'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Route, Switch, Redirect } from 'react-router-dom';

function App() {

  AOS.init()

  const [welcome, setWelcome] = useState(false)

  const handleWelcome = () => {
    setTimeout(() => setWelcome(true), 3000);
  }

  return (
    <div className="App">
      <Switch>
        {!welcome && <Welcome handleWelcome={handleWelcome}/>}
        <Route exact={true} path="/" component={Main} />
        <Route path="/blogs" component={BlogPage} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;