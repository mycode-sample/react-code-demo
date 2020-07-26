import React, { Component } from 'react';

export default function MyHoc(WrappedComponent, data) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: data,
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.setState(state => ({
        data: state.data + 1,
      }));
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props}/>
    }
  }
}