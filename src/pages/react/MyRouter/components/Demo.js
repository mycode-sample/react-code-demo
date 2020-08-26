import React from 'react';

export default function Demo(props) {
  return(
    <div>demo:{props.msg ? props.msg : "default"}</div>
  );
}