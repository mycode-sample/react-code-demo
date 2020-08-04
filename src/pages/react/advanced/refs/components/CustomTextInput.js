import React, { createRef, Component } from 'react';

export default class CustomTextInput extends Component {
  constructor(props) {
    super(props);
    this.textInput = createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  render() {
    return(
      <div>
        <input type="text" ref={this.textInput}/>
        <input type="button" onClick={this.focusTextInput} value="button"/>
        <input type="text"/>
      </div>
    );
  }
}