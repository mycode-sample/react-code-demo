import { Button } from 'antd';
import React, { Component } from 'react';
import FunHandler from './FunHandler';
import HandlerArgs from './HandlerArgs';

export default class Handler extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nowTime: new Date().toLocaleTimeString(),
      millSecond: new Date().getMilliseconds(),
    };
    this.changeTime = this.changeTime.bind(this);
  }

  changeTime() {
    // e.preventDefault();
    this.setState({
      nowTime: new Date().toJSON(),
    });
  }

  render() {
    return(
      <div>
        <h1>事件处理</h1>
        <p>当前时间：{this.state.nowTime}</p>
        <p>没有参数,bind绑定</p>
        <Button onClick={this.changeTime}>changeTime</Button>
        <Button onClick={this.changeTime.bind(this)}>changeTime</Button>
        <Button onClick={(e) => {this.changeTime();}}>changeTime</Button>
        <FunHandler changeTime={() => this.changeTime()}/>
        <HandlerArgs/>
      </div>
    );
  }
}