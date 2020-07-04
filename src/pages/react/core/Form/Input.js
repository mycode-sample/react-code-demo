import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      value2: "",
      text: "init",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      value: e.target.value,
    });
  }

  onChange2(e) {
    e.preventDefault();
    this.setState({
      value2: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    if (e.target.length === undefined) {
      this.setState({
        text: e.target.value,
      });
    } else {
      let val = [];
      for (var i = 0; i < e.target.length - 1; i++) {
        console.log(e.target[i].value);
        val.push(e.target[i].value);
      }
      this.setState({
        text: val.join(", "),
      });
    }
  }

  render() {
    return(
      <div>
        <h1>hello</h1>
        <form onSubmit={this.onSubmit}>
          name:<input name="name1" value={this.state.value} onChange={this.onChange.bind(this)}></input>
          name:<input name="name2" value={this.state.value2} onChange={this.onChange2.bind(this)}></input>
          <input type="submit" value="submit"/>
          {/* <button onClick={this.onSubmit.bind(this)}>提交</button> */}
        </form>
        <div>{this.state.text}</div>
      </div>
    );
  }
}

export default Input;