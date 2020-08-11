import React, { createRef, Component } from 'react';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.myRefs = createRef();
  }

  render() {
    return <div ref={this.myRefs}/>;
  }
}