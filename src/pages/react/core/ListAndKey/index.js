import React, { Component } from 'react';
import Keys from './Keys';

class ListAndKey extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [1, 2, 3, 4, 5, 6, 7],
    };
  }

  render() {
    return(
      <div>
        <Keys list={this.state.list}/>
      </div>
    );
  }
}

export default ListAndKey;