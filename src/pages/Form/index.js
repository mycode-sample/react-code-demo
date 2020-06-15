import React, { Component } from 'react';
import { Nav } from '../Nav';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';

class Form extends Component {
  render() {
    const select = [1, 2, 3, 4, 5];
    const value = 1;
    return(
      <div>
        <Nav/>
        <Input/>
        <TextArea/>
        <Select select={select} value={value}/>
      </div>
    );
  }
}

export default Form;