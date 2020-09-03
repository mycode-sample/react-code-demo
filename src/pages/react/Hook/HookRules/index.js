import React, { useState } from 'react';
import CorrectRule from './CorrectRule';
import InCorrectRule from './InCorrectRule';
import InCorrectStateRule from './InCorrectStateRule';

export default function HookRules(props) {
  const [visible, setVisible] = useState(false);
  const [stateVisible, setStateVisible] = useState(false);

  return(
    <div>
      <h1>hook规则</h1>
      <button onClick={(e) => setVisible(!visible)}>错误规则示例</button>
      <br/>
      <button onClick={(e) => setStateVisible(!stateVisible)}>state规则</button>
      <CorrectRule/>
      <hr/>
      {visible && <InCorrectRule/>}
      <hr/>
      {stateVisible && <InCorrectStateRule/>}
    </div>
  );
}