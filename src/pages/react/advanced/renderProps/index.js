import React from 'react';
import App from './components/App';
import MouseTracker from './components/MouseTracker';

export default function RenderProps(props) {
  return(
    <div>
      <App render={() => (<div>hello,this is a render of props</div>)}/>
      <MouseTracker/>
    </div>
  );
}