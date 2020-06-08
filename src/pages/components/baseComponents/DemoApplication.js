import React, { Component } from 'react';
import { Nav } from '../../Nav';

// function DemoApplication(props) {
//   return(
//     <div>
//       <Nav/>
//       <h1>这是一个demo</h1>
//     </div>
//   );
// }

class DemoApplication extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.handleReset.bind(this.handleReset);
  //   // this.handleClick2.bind(this.handleClick2);
  //   // this.handleClick3.bind(this.handleClick3);
  //   // this.state = {
  //   //   count: 0,
  //   // }
  // }

  handleClick = () => {
    this.setState({
      num: 1,
    });
  }

  // handleClick2(e) {
  //   e.preventDefault();
  handleClick2 = (e) => {
    this.setState({
      num: 2,
    });
  }

  handleReset(e) {
    e.preventDefault();
    this.setState({
      num: 1,
    });
  }

  // handleClick3(e) {
  //   e.preventDefault();
  handleClick3 = (e) => {
    this.setState((state) => ({
      num: 3,
    }));
  }

  render() {
    return(
      <div>
        <Nav/>
        {/* <div>num: {this.state.num ? this.state.num : this.state.count}</div> */}
        <button onClick={(e) => this.handleReset(e)}>reset</button>
        <button onClick={this.handleClick}>click1</button>
        <button onClick={(e) => this.handleClick2(e)}>click2</button>
        <button onClick={(e) => this.handleClick3(e)}>click3</button>
      </div>
    );
  }
}

export default DemoApplication;