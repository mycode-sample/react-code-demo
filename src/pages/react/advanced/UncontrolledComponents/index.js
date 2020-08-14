import React from 'react';
import CommonNav from '../../../../components/CommonNav';

export default function UnControlledComponent(props) {
  const nav = [
    {
      path: '/react/advanced/uncontrolled-component/demo',
      name: 'NameForm',
    }
  ];
  return(
    <CommonNav nav={nav}/>
  );
}