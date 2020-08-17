import React from 'react';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("error", error);
    console.log("errorInfo", errorInfo);
  }

  render() {
    if(this.state.hasError) {
      return <p>there is a error.</p>
    }
    return this.props.children;
  }
}