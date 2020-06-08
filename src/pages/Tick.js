import React, { Component } from 'react';
import Time from './components/Time';
import { Nav } from './Nav';

class Tick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: new Date().toLocaleTimeString(),
    }
  }

  componentDidMount() {
  // componentDidMount() {
    setInterval(() => {
      this.setState({
        now: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
  // componentDidMount() {
    setInterval(() => {
      this.setState({
        now: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  render() {
    return(
      <div>
        <Nav/>
        <Time now={this.state.now}/>
        <div>{this.state.now}</div>
      </div>
    );
  }
}

// function Tick() {
//   let now;
//   setInterval(() => {
//     now = new Date().toLocaleTimeString();
//   }, 1000);
//   return(
//     <div>
//       <Nav/>
//       <Time now={now}/>
//     </div>
//   );
// }

export default Tick;