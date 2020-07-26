import React, { Component } from 'react';
import MyHoc from './MyHoc';

const data = 1;

class Hoc extends Component {
  render(){
    return(
      <div>
        <h1>hoc</h1>
      </div>
    );
  }
}

export default MyHoc(Hoc, data);