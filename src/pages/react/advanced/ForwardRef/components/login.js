import React, { forwardRef } from 'react';

function login(WrappedComponent) {
  class LogProps extends React.Component {
      componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const { ref, ...rest } = this.props;
      return <WrappedComponent ref={ref} {...rest}/>;
    }
  }

  return forwardRef((props, ref) => (
    <LogProps ref={ref} {...props}/>
  ));
}

export default login;
