import React from 'react';
import CommonNav from '../../../components/CommonNav';

const nav = [
  {
    path: '/react/context/demo',
    name: 'context简单demo',
  },
];

export default function Contexts(props) {
  return <CommonNav nav={nav}/>
}