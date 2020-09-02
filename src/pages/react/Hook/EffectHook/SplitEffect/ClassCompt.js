import { Input } from 'antd';
import React, { Component } from 'react';

export default class ClassCompt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      header: "",
    }
  }

  componentDidMount() {
    document.title = "init";
    this.setState({
      header: 'header',
    })
  }

  componentDidUpdate() {
    document.title = `updated:${this.state.title}`;
    window.localStorage.setItem("header", this.state.header);
  }

  handleTitleChange = (e) => {
    if(e) e.preventDefault();
    this.setState({
      title: e.target.value,
    })
  }

  handleHeaderChange = (e) => {
    if(e) e.preventDefault();
    this.setState({
      header: e.target.value,
    })
  }

  componentWillUnmount() {
    document.title = "after";
    window.localStorage.removeItem("header");
  }

  render() {
    return(
      <div>
        <div>
          <span>title:</span>
          <Input value={this.state.title} onChange={this.handleTitleChange}/>
        </div>
        <div>
          <span>header:</span>
          <Input value={this.state.header} onChange={this.handleHeaderChange}/>
        </div>
        <div>{this.state.header}</div>
      </div>
    );
  }
}