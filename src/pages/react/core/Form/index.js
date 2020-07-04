import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';

class Form extends Component {
  render() {
    const select = [1, 2, 3, 4, 5];
    const value = 1;
    return(
      <div>
        <Input/>
        <TextArea/>
        <Select select={select} value={value}/>
      </div>
    );
  }
}

export default Form;