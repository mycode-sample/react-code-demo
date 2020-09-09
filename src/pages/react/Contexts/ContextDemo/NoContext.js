import React, { useState } from 'react';
import { Input } from 'antd';
import ToolBar from './ToolBar';

export default function NoContext(props) {
  const [theme, setTheme] = useState();

  return(
    <div>
      <Input onChange={(e) => setTheme(e.target.value)}/>
      <ToolBar theme={theme}/>
    </div>
  );
}