import { DatePicker } from 'antd';
import React from 'react';
import { Nav } from '../../Nav';

export function Antd() {
  return(
    <div>
      <Nav/>
      <div>
        <DatePicker />
        <br/>
        <DatePicker picker="week" />
        <br/>
        <DatePicker picker="month" />
        <br/>
        <DatePicker picker="quarter" />
        <br/>
        <DatePicker picker="year" />
      </div>
    </div>
  );
}