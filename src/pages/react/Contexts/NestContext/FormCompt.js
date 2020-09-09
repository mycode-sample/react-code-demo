import { Button, Input } from 'antd';
import React from 'react';
import { FormContext } from './FormContext';

export default function FormCompt(props) {
  return(
    <div>
      <p>button</p>
      <FormContext.Consumer>
        {({count, btnText, onClick, inputText, onChange}) => (
          <div>
            <Button onClick={onClick}>{btnText}</Button>
            <Input onChange={onChange}/>
            <p>inputText: {inputText}</p>
            <p>count: {count}</p>
          </div>
        )}
      </FormContext.Consumer>
    </div>
  );
}