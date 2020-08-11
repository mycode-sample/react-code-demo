import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({
      value: e.target.value,
    });
  }

  renderSelect(items) {
    return items.map(item => <option value={item}>{item}</option>);
  }

  componentDidMount() {
    const { value } = this.props;
    this.setState({
      value: value ? value : "",
    });
  }

  render() {
    const { select } = this.props;
    return(
      <div>
        <select value={this.state.value} onChange={this.onChange.bind(this)}>
          {this.renderSelect(select)}
        </select>
        <div>{this.state.value}</div>
      </div>
    );
  }
}

export default Select;