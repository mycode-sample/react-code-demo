import React from 'react';

export default function Welcome(props) {
  return(
    <div>
      <h1>hello,welcome to react.</h1>
      {props.children}
    </div>
  );
}