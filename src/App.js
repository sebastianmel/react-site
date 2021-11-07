import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import {Project1,Project2,Project3,Project4} from './pages/Projects';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route excact path="/project-1" component={Project1} />
      <Route excact path="/project-2" component={Project2} />
      <Route excact path="/project-3" component={Project3} />
      <Route excact path="/project-4" component={Project4} />
      <Route exact path="/contact" component={Contact} />
      <Redirect to="/" />

    </Switch>
  );
};

export default App;