import React from 'react';

function CustomTextInput(props) {
  return (
    <div>
      <input ref={props.inputRef}/>
    </div>
  );
}

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if(e) {
      e.preventDefault();
    }
    this.inputElement.focus();
  }

  render() {
    return (
      <div>
        <CustomTextInput inputRef={el => {console.log("el", el);this.inputElement = el;}}/>
        <button onClick={this.handleClick}>callbackref2</button>
      </div>
    );
  }
}