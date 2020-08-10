import React, { Component } from 'react';
import TextInput from './TextInput';
import login from './login';

class HocComponent extends Component {
  render() {
    return(
      <div>
        <p>this is a HocComponent.</p>
        <TextInput/>
      </div>
    );
  }
}

export default login(HocComponent);