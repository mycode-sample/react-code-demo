import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

function useNum(arg) {
  const [num, setNum] = useState(arg);
  return [num, setNum];
}

function useMultiNum(args) {
  const [num, setNum] = useState(args);
  const [gender, setGender] = useState(true);
  const [age, setAge] = useState(18);
  return [
    [num, setNum],
    [gender, setGender],
    [age, setAge]
  ];
}

function useTitle(args) {
  let title, setTitle;
  if(args) {
    [title, setTitle] = useState(args);
  } else {
    [title, setTitle] = useState("default");
  }
  useEffect(() => {
    document.title = title;
  })
  return [title, setTitle];
}

export default function CustomHookWithDefaultHook(props) {
  const [title, setTitle] = useTitle();
  const [num, setNum] = useNum(1);

  const [
    [num2, setNum2],
    [gender, setGender],
    [age, setAge]
  ] = useMultiNum(1);

  return(
    <div>
      <p>调用内置hook</p>
      <input onChange={(e) => setTitle(e.target.value)}/>
      <p>{title}</p>
      <Button onClick={(e) => setNum(num + 1)}>click</Button>
      <p>{num}</p>
    </div>
  );
}