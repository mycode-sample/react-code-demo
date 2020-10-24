import { Input, Button } from 'antd';
import React, { useState } from 'react';
import { connect, Provider } from 'react-redux';
import store from './store';
import * as actions from './actions';

function ReduxApp(props) {
  const [left, setLeft] = useState(props.left);
  const [right, setRight] = useState(props.left);

  const { dispatch } = props;

  const handleAdd = () => {
    dispatch(actions.add({
      left,
      right,
    }));
  };

  const handelSubtract = () => {
    dispatch(actions.subtract({
      left,
      right,
    }));
  };

  const handleMultiply = () => {
    dispatch(actions.multiply({
      left,
      right,
    }));
  };

  const handleDivide = () => {
    dispatch(actions.divide({
      left,
      right,
    }));
  };

  return(
    <div>
      <Input value={left} onChange={(e) => setLeft(e.target.value)}/>
      <Input value={right} onChange={(e) => setRight(e.target.value)}/>
      <Button onClick={handleAdd}>加</Button>
      <Button onClick={handelSubtract}>减</Button>
      <Button onClick={handleMultiply}>乘</Button>
      <Button onClick={handleDivide}>除</Button>
      <p>{props.message}</p>
      <p>result: {props.result}</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    left: state.left,
    right: state.right,
    message: state.message,
    result: state.result,
    operate: state.operate,
  };
};

const ConnectedReduxApp = connect(mapStateToProps)(ReduxApp);

function MiddleWare() {
  return(
    <Provider store={store}>
      <ConnectedReduxApp/>
    </Provider>
  );
}

export default MiddleWare;