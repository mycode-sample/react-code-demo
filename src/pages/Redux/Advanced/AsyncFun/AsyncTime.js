import React, { useState } from 'react';
import TimeCompt from './components/TimeCompt';
import { connect } from 'react-redux';
import { getCurrentTime, setCurrentTime, setCustomTime } from './reduxComponents/action';

function AsyncTime(props) {
  const [value, setValue] = useState("");
  const { currentTime2, customTime2 } = props;

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
    dispatch(getCurrentTime());
    // setCurrentTime(Date().toString());
  }

  return(
    <TimeCompt
      value={value}
      currentTime={currentTime2}
      customTime={customTime2}
      autoGetTime={autoGetTime}
      handleSubmit={handleSubmit}
      onChange={onChange}
    />
  );
}

export default connect(state => ({
  currentTime: state.currentTime,
  customTime: state.customTime,
  currentTime2: state.currentTime2,
  customTime2: state.customTime2,
  status: state.status,
  msg: state.msg
}))(AsyncTime)