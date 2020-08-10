import React, { forwardRef, createRef } from 'react';

export default function TextInput(props) {
  const Input = forwardRef((props, ref) => {
    return (
      <div>
        <input ref={ref}/>
      </div>
    );
  });

  const ref = createRef();

  return(
    <div>
      <Input ref={ref} text="click"/>
    </div>
  );
}