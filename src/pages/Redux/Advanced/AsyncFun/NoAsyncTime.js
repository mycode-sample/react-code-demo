import React, { useState } from 'react';
import TimeCompt from './components/TimeCompt';
import { connect } from 'react-redux';
import { setCurrentTime, setCustomTime } from './reduxComponents/action';

function NoAsyncTime(props) {
  const [value, setValue] = useState("");
  const { currentTime, customTime } = props;

  const handleSubmit = (e) => {
    if(e) {
      e.preventDefault();
    }
    const { dispatch } = props;
    dispatch(setCustomTime({
      customTime: value,
    }));
    // setCustomTime(value);
  }

  const onChange = (e) => {
    if(e) {
      e.preventDefault();
    }
    setValue(e.target.value);
  }

  const autoGetTime = (e) => {
    if(e) {
      e.preventDefault();
    }
    const { dispatch } = props;
    dispatch(setCurrentTime({
      currentTime: Date().toString(),
    }));
    // setCurrentTime(Date().toString());
  }

  return(
    <TimeCompt
      value={value}
      currentTime={currentTime}
      customTime={customTime}
      autoGetTime={autoGetTime}
      handleSubmit={handleSubmit}
      onChange={onChange}
    />
  );
}

export default connect(state => ({
  currentTime: state.currentTime,
  customTime: state.customTime,
}))(NoAsyncTime)