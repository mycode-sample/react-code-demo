import React from 'react';
import login from './components/login';

const user = "zhangsan";

function User(props) {
  return <p>this is a user component.</p>
}

export default login(User, user);