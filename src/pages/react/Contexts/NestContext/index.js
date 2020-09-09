import React, { useState } from 'react';
import { FormContext } from './FormContext';
import MiddleWare from './MiddleWare';

export default function NestContext(props) {
  const [inputText, setInputText] = useState("input");
  /* eslint-disable no-unused-vars */
  const [btnText, setBtnText] = useState("click");
  const [count, setCount] = useState(1);

  return(
    <div>
      <FormContext.Provider value={{
        onClick: (e) => setCount(count + 1),
        onChange: e => setInputText(e.target.value),
        inputText: inputText,
        btnText: btnText,
        count: count,
      }}>
        <MiddleWare/>
      </FormContext.Provider>
    </div>
  );
}