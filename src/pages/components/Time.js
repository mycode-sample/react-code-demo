import React from 'react';

export default function Time(props) {
  return(
    <div>
      <h1>现在的时间是{props.now}</h1>
    </div>
  );
}