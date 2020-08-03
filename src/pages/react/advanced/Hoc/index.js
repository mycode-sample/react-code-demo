import React, { Component } from 'react';
import List from './List';
import App from './App';

const data = 1;

class Hoc extends Component {
  render(){
    return(
      <div>
        <h1>hoc</h1>
        <List a="x" b="b"/>
        <App a1="a1" a2="a2"/>
      </div>
    );
  }
}

export default Hoc;