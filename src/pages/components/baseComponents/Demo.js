import React, { Component } from 'react';

export class Demo extends Component {

  constructor(props) {
    super(props);
    console.log("constructor2");
    this.state = {
      time: new Date().toJSON(),
      second: new Date().getMilliseconds(),
    }
  }

  componentWillMount() {
    console.log('componentWillMount2', this.state);
  }

  componentDidMount() {
    console.log('componentDidMount2', this.state);
    this.setState({
      second: new Date().getMilliseconds(),
    });
  }

  componentWillUpdate() {
    console.log('componentWillUpdate2', this.state);
  }

  componentDidUpdate(prepProps, prepState) {
    console.log('componentDidUpdate2', this.state);
    console.log("props and state2", prepProps, prepState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount2', this.state);
  }

  handleClick = () => {
    this.setState({
      second: new Date().getMilliseconds(),
    });
  }

  render() {
    return(
      <div>
        <div>
          <h1>Demo</h1>
          <div>time: {this.state.time}</div>
          <div>second: {this.state.second}</div>
          <div>
            <button onClick={() => this.handleClick()}>更新时间</button>
          </div>
          <h1>self props</h1>
          <div>time: {this.props.now.time}</div>
          <div>second: {this.props.now.second}</div>
        </div>
      </div>
    );
  }
}