import React from 'react';
import { Provider } from 'react-redux';
import AsyncTime from './AsyncTime';
import NoAsyncTime from './NoAsyncTime';
import store from './reduxComponents/store';

function AsyncFun() {
  return(
    <div>
      <h1>AsyncFun.</h1>
      <h2>同步修改</h2>
      <NoAsyncTime/>
      <hr/>
      <div>异步修改</div>
      <AsyncTime/>
    </div>
  );
}

export default function() {
  return(
    <Provider store={store}>
      <AsyncFun/>
    </Provider>
  );
}
