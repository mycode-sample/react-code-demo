import { Button } from 'antd';
import React, { Component } from 'react';

export default class HandlerArgs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nowTime: new Date().toLocaleTimeString(),
    };
  }

  click(first, second, three) {
    console.log("first:", first);
    console.log("second:", second);
    console.log("three:", three);
    console.log("---");
  }

  render() {
    return(
      <div>
        <h1>事件处理</h1>
        <p>当前时间：{this.state.nowTime}</p>
        <p>没有this</p>
        <Button onClick={this.click.bind()}>click</Button>
        <Button onClick={this.click.bind(1)}>click1</Button>
        <Button onClick={this.click.bind(1, 2)}>click2</Button>
        <Button onClick={this.click.bind(1, 2, 3)}>click3</Button>
        <Button onClick={this.click.bind(1, 2, 3, 4)}>click4</Button>
        <Button onClick={this.click.bind(1, 2, 3, 4, 5)}>click5</Button>
        <p>有this</p>
        <Button onClick={this.click.bind(this)}>click</Button>
        <Button onClick={this.click.bind(this, 1)}>click1</Button>
        <Button onClick={this.click.bind(this, 1, 2)}>click2</Button>
        <Button onClick={this.click.bind(this, 1, 2, 3)}>click3</Button>
        <Button onClick={this.click.bind(this, 1, 2, 3, 4)}>click4</Button>
        <Button onClick={this.click.bind(this, 1, 2, 3, 4, 5)}>click5</Button>
      </div>
    );
  }
}