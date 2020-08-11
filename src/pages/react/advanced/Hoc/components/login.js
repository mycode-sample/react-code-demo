import React, { Component } from 'react';

export default function login(WrappedComponent, user) {
  class Login extends Component {
    constructor(props){
      super(props);
      this.state = {
        user: null,
        online: false,
      };
      this.toggleStatus = this.toggleStatus.bind(this);
    }

    toggleStatus(e) {
      if(e) {
        e.preventDefault();
      }
      if(this.state.online) {
        this.setState(state => ({
          user: null,
          online: !state.online,
        }));
      }
    }

    render(){
      const { extraProp, ...passThroughProps } = this.props;
      console.log("ex", extraProp);
      console.log("pas", passThroughProps);
      // return(
      //   <div>
      //     <WrappedComponent {...Component.extraProp} {...passThroughProps}/>
      //     <button onClick={this.toggleStatus}>{this.state.online ? "logout" : login}</button>
      //     <p>{this.state.online ? `${this.state.user}已经登录` : "请登录"}</p>
      //   </div>
      // );
      return <WrappedComponent a="a" b="b"/>;
    }
  }

  Login.displayName = `Login(${getDisplayName(WrappedComponent)})`;
  return Login;

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "login";
  }
}