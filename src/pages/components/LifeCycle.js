import React, { Component } from 'react';
import { Nav } from '../Nav';
import { Demo } from './baseComponents/Demo';

export default class LifeCycle extends Component {

  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      time: new Date().toJSON(),
      second: new Date().getMilliseconds(),
    }
  }

  componentWillMount() {
    console.log('componentWillMount', this.state);
  }

  componentDidMount() {
    console.log('componentDidMount', this.state);
    this.setState({
      second: new Date().getMilliseconds(),
    });
  }

  componentWillUpdate() {
    console.log('componentWillUpdate', this.state);
  }

  componentDidUpdate(prepProps, prepState) {
    console.log('componentDidUpdate', this.state);
    console.log("props and state", prepProps, prepState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount', this.state);
  }

  handleClick = () => {
    this.setState({
      second: new Date().getMilliseconds(),
    });
  }

  render() {
    return(
      <div>
        <Nav/>
        <div>
          <h1>LifeCycle</h1>
          <div>time: {this.state.time}</div>
          <div>second: {this.state.second}</div>
          <div>
            <button onClick={() => this.handleClick()}>更新时间</button>
          </div>
          <Demo now={this.state}/>
        </div>
      </div>
    );
  }
}