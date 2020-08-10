import React, { Component } from 'react';

export default class  App extends Component {
  render() {
    return(
      <div>
        {this.props.render()}
        <p>this is a demo app.</p>
        <div>hello.</div>
      </div>
    );
  }
}