import React from 'react';
import login from './components/login';

function List(props) {
  return(
    <div>this is a list.</div>
  );
}

const user = "list";

export default login(List, user);