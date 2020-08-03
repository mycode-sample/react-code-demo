import React from 'react';
import List from './List';

export default function App(props) {
  const mm = {
    ...props,
  }
  return <List  {...props} y="y" z="z"/>
}