import React from 'react';
import './App.scss';
import Main from './containers/Main';
import Welcome from './components/welcome';
import { BlogPage } from './components/blogs/blogPage';
import NotFound from './components/notFound'
import AOS from 'aos';
import 'aos/dist/aos.css';


import { Route, Switch, useHistory, Redirect } from 'react-router-dom';

function App() {

  AOS.init()
  const history = useHistory();

  const handleLoad = () => {
    setTimeout(() => history.push("/main"), 3000);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact={true} path="/" render={(props) => (
          <Welcome handleLoad={handleLoad} />
        )} />
        <Route exact={true} path="/main" component={Main} />
        <Route path="/blogs" component={BlogPage} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
