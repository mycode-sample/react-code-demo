import { Button, Input } from 'antd';
import React from 'react';

export default function TimeCompt(props) {
  const { currentTime, customTime, handleSubmit, autoGetTime, onChange, value } = props;
  return(
    <div>
      输入当前时间，YYYY-MM-DD hh:mm:ss：<Input style={{width: 200}} onChange={onChange} value={value}/>
      <Button onClick={handleSubmit}>提交自定义时间</Button>
      <Button onClick={autoGetTime}>自动获取当前时间</Button>
      <div>
        {props.render}
      </div>
      <div>
        <span>你设置的时间：</span>
        <span>{customTime}</span>
      </div>
      <div>
        <span>当前时间：</span>
        <span>{currentTime}</span>
      </div>
    </div>
  );
}