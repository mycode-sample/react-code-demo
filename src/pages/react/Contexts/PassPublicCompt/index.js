import React, { useState } from 'react';
import { Button } from 'antd';

function ButtonCompt(props) {
  const [count, setCount] = useState(1);
  return(
    <div>
      <p>{count}</p>
      <Button onClick={e => setCount(count + 1)}>{props.text}</Button>
    </div>
  );
}

function Parent(props) {
  return(
    <div>
      <p>parent.</p>
      {props.btn}
    </div>
  );
}

export default function PassPublicCompt(props) {
  return(
    <div>
      <p>传递组件</p>
      <Parent btn={ButtonCompt}/>
    </div>
  )
}