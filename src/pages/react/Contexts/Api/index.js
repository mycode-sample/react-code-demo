import { Input } from 'antd';
import React from 'react';
import Toolbar from './ToolBar';
import ThemeContext from './ApiContext';
import Consumers from './Consumers';

// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
export default class Api extends React.Component {
  static contextType = ThemeContext;

  constructor(props) {
    super(props);
    this.state =  {
      theme: 'dark',
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if(e) e.preventDefault();
    this.setState({
      theme: e.target.value,
    })
  }

  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <p>UseContextDemo.</p>
        <div>
          <span>theme:</span>
          <span>
          <Input onChange={this.onChange}/>
          </span>
        </div>
        <Toolbar />
        <hr/>
        <Consumers/>
      </ThemeContext.Provider>
    );
  }
}