import React from 'react';

export default function Comment(props) {
  return(
    <div style={{padding: 5}}>
      <div>{props.comment}</div>
      <div>{new Date().toLocaleTimeString()}</div>
    </div>
  );
}