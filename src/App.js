import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import About from './pages/components/About.js';
import { Antd } from './pages/components/antd/Antd';
import DemoApplication from './pages/components/baseComponents/DemoApplication';
import Home from './pages/components/Home';
import Topics from './pages/components/topic/Topics';
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
        <Route path="/antd">
          <Antd/>
        </Route>
        <Route path="/primary">
          <DemoApplication parent="parent"/>
        </Route>
        <Route path="/primary/:id">
          <DemoApplication parent="id"/>
        </Route>
        <Route path="/">
          <Nav/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
