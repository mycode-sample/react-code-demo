import React from 'react';
import ThemeContext from './ApiContext';
import { Button } from 'antd';

export default function Consumers(props) {
  return(
    <ThemeContext.Consumer>
      {value => {
        return <Button>消费者：{value}</Button>
      }}
    </ThemeContext.Consumer>
  );
}