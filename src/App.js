import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import Topics from './pages/components/topic/Topics';
import About from './pages/components/About.js';
import Home from './pages/components/Home';
import Users from './pages/components/Users';
import { Nav } from './pages/Nav';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/topics">
          <Topics/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/">
          <Nav/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
