import React from 'react';

export default function CommonIndex(props) {
  return(
    <div>
      <h1>你位于根目录</h1>
      <h1>location: {window.location.pathname}</h1>
    </div>
  );
}