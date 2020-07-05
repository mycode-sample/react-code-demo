import { Button } from 'antd';
import React, { Component } from 'react';

// function FunHandler(props) {
//   const { changeTime } = props;
//   return(
//     <div>
//       <h2>事件处理2</h2>
//       <p>父组件</p>
//       <Button onClick={changeTime}>改变父组件时间</Button>
//       <Button onClick={() => {changeTime()}}>箭头函数传入</Button>
//       <p>函数组件</p>
//       <Button onClick={click}>函数组件处理函数</Button>
//     </div>
//   );
// }

class FunHandler extends Component {

  render() {
    const { changeTime } = this.props;
    return(
      <div>
        <h2>事件处理2</h2>
        <p>父组件</p>
        <Button onClick={this.changeTime}>改变父组件时间</Button>
        <Button onClick={() => {changeTime()}}>箭头函数传入</Button>
      </div>
    );
  }
}

export default FunHandler;