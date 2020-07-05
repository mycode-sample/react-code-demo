import React, { Component } from 'react';

class Keys extends Component {

  renderList(list) {
    const li = list.map((item, index) => {
      // return <li key={index}>{item}</li>
      return <li>{item}</li>
    });
    return(
      <ul>
        {li}
      </ul>
    );
  }

  render() {
    const { list } = this.props;
    return(
      <div>
        {/* {this.renderList()} */}
        {this.renderList(list)}
      </div>
    );
  }
}

export default Keys;