import React from 'react';
import { BrowserRouter as Route, Link, Switch } from "react-router-dom"; 
import App from './App.jsx'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      {/* <Route path="/edit/:id" component={EditPost}/> */}
      {/* <Route path="/create" component={ComposePost}/> */}
    </Switch>
  </BrowserRouter>
);

export default Router