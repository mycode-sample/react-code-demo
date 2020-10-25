import { Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';

function Welcome(props) {
  const { dispatch } = props;

  const handleClick = () => {
    dispatch({
      type: "demo/add",
    });
  };

  return(
    <div>
      <h1>hello,welcome to react.</h1>
      {props.children}
      <Button onClick={handleClick}>click</Button>
    </div>
  );
}

export default connect(state => state)(Welcome);