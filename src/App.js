import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import pages here
import Index from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={props => <Index {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default hot(App);
