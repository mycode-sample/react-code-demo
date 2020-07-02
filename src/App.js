import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import BasicLayout from './layouts/BasicLayout';
import Form from './pages/Form';
import Handler from './pages/Handler';
import LifeCycle from './pages/LifeCycle';
import ListAndKey from './pages/ListAndKey';

export default function App(props) {
  return(
    <BasicLayout>
      <Route path='/react/form' component={Form}/>
      <Route path='/react/handler' component={Handler}/>
      <Route path='/react/lifeCycle' component={LifeCycle}/>
      <Route path='/react/listAndKey' component={ListAndKey}/>
    </BasicLayout>
  )
}

