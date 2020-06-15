import React, { Component } from 'react';

class Application extends Component {
  render() {
    const { renderFun } = this.props;
    const list = [10, 11, 12, 13, 14];
    return(
      <div>
        {renderFun(list)}
      </div>
    );
  }
}

export default Application;