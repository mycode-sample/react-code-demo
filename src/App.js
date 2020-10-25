import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import BasicLayout from './layouts/BasicLayout';
import store from './store';

export default function App() {
  return(
    <Provider store={store}>
      <BasicLayout/>
    </Provider>
  );
}

