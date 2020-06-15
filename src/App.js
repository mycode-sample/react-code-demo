import React from 'react';
import {
  BrowserRouter as Router,
  Link, Route, Switch
} from "react-router-dom";
import './App.css';
import About from './pages/components/About.js';
import { Antd } from './pages/components/antd/Antd';
import DemoApplication from './pages/components/baseComponents/DemoApplication';
import Home from './pages/components/Home';
import LifeCycle from './pages/components/LifeCycle';
import Topics from './pages/components/topic/Topics';
import Users from './pages/components/Users';
import Form from './pages/Form';
import Handler from './pages/Handler';
import { Nav } from './pages/Nav';
import ListAndKey from './pages/TabAndKey';
import Tick from './pages/Tick';
import UserInfo from './pages/UserInfo';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/form">
          <Form/>
        </Route>
        <Route path="/listAndKey">
          <ListAndKey/>
        </Route>
        <Route path="/click">
          <Handler/>
        </Route>
        <Route path="/userInfo">
          <UserInfo/>
        </Route>
        <Route path="/lifeCycle">
          <LifeCycle/>
        </Route>
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
        <Route path='/tick'>
          <Tick/>
          <div>hello</div>
        </Route>
        <Route path="/nav">
          <Nav/>
        </Route>
        <Route path="/">
          <div style={{padding: 10}}>
            <h1>hello world</h1>
            <Link to="/nav">nav</Link>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
