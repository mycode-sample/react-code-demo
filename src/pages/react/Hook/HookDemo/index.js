import React, { useState, useEffect } from 'react';


export default function HookDemo(props) {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    document.title = `click ${num} times`;
    return () => {
      setCount(count + 1);
    }
  });
  return(
    <div>
      <button onClick={() => setNum(num + 1)}>click</button>
      <div>num: {num}</div>
      <div>count: {count}</div>
    </div>
  );
}