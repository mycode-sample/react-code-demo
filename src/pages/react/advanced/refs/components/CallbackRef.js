import React, { Component } from 'react';

export default class CallbackRef extends Component {
  constructor(props) {
    super(props);
    // this.textInput = null;
    // this.setTextInput = element => {
    //   this.textInput = element;
    // }
    this.setTextInput = this.setTextInput.bind(this);
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.textInput.focus();
    // }, 5000); // 自动获得焦点
  }

  setTextInput(element) {
    console.log("element", element);
    this.textInput = element;
  }

  focusTextInput() {
    this.textInput.focus();
  }

  render() {
    // 使用ref的回调函数将dom输入框的焦点引用存储到react实例上
    return(
      <div>
        <input ref={this.setTextInput}/>
        <button onClick={this.focusTextInput}>CallbackRef</button>
        <input/>
      </div>
    );
  }
}