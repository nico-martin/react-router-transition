import React from 'react';
import { Route, useLocation } from 'react-router-dom';

import Navigation from './Navigation';
import Page from './Page';

import './App.css';

const App = () => {
  const [hidden, setHidden] = React.useState(true);
  const location = useLocation();
  const [delayedLocation, setDelayedLocation] = React.useState(location);

  React.useEffect(() => {
    setHidden(true);
    setTimeout(() => {
      setHidden(false);
      setDelayedLocation(location);
    }, 400);
  }, [location]);

  return <div className="app">
    <Navigation className="app__navigation"/>
    <div className="app__page" aria-hidden={hidden}>
      <Route path="/page/:id/" location={delayedLocation}>
        <Page/>
      </Route>
      <Route path="/" exact location={delayedLocation}>
        <h1>Home</h1>
      </Route>
    </div>
  </div>;
};

export default App;
