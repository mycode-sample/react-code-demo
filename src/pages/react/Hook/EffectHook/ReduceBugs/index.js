import React, { useState } from 'react';
import ClassCompt from './ClassCompt';

export default function ReduceBugs() {
  const [msg, setMsg] = useState(1);

  return(
    <div>
      <button onClick={() => setMsg(msg + 1)}>click</button>
      <p>{msg}</p>
      <ClassCompt msg={msg}/>
    </div>
  );
}