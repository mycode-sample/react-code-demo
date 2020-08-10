import React, { createRef } from 'react';
import TextInput from './components/TextInput';
import HocComponent from './components/HocComponent';

export default function ForwardRef(props) {
  const ref = createRef();

  return(
    <div>
      <TextInput/>
      <hr/>
      <HocComponent ref={ref}/>
    </div>
  );
}