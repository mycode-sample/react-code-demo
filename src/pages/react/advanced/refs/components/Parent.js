import React from 'react';

function MyFunctionComponent() {
  return <input />;
}

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.textInput.current.focus();
  }

  render() {
    // This will *not* work!
    return (
      <div>
        <MyFunctionComponent ref={this.textInput} />
        <button onClick={this.handleClick}>button</button>
        <input/>
      </div>
    );
  }
}