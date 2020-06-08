import React from 'react';

export default function Avatar(props) {
  return(
    <div
      style={{
        padding: 5,
        backgroundColor: "blue",
        width: 20,
        height: 20,
        textAlign: "center"}}
    >
      {props.avatar}
    </div>
  );
}