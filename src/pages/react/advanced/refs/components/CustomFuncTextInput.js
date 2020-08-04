import React, { useRef } from 'react';

export default function CustomFuncTextInput(props) {
  const textInput = useRef();

  function handleClick(){
    textInput.current.focus();
  }

  return(
    <div>
      <input type="text" ref={textInput}/>
      <input type="button" onClick={handleClick} value="button"/>
      <input type="text"/>
    </div>
  );
}