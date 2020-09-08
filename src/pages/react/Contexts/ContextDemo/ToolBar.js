import React from 'react';
import ThemeButton from './ThemeButton';

export default function ToolBar(props) {
  return(
    <div>
      <p>theme: {props.theme}</p>
      <ThemeButton {...props}/>
    </div>
  );
}