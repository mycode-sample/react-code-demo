import React, { Component } from 'react';

// export default class Load extends Component {
//   render() {
//     return <h1>load component.</h1>
//   }
// }

export default function Load(props) {
  return <h1>load component:{props.msg}</h1>
}