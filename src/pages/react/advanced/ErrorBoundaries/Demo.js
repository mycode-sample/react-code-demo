import React from 'react';
import ErrorBound from './components/ErrorBound';
import Errors from './components/Error';

export default function Demo(props) {
  return(
    <div>
      <h1>Demo</h1>
      <ErrorBound>
        <Errors/>
      </ErrorBound>
    </div>
  );
}