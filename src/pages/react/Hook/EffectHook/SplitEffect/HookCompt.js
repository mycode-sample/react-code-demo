import { Input } from 'antd';
import React, { useState, useEffect } from 'react';

export default function HookCompt(props) {
  const [title, setTitle] = useState("init");
  const [header, setHeader] = useState("init");

  useEffect(() => {
    document.title = `updated:${title}`;
    return () => {
      console.log("1");
      document.title = "after";
    }
  })

  useEffect(() => {
    window.localStorage.setItem("header", header);
    return () => {
      window.localStorage.setItem("header", "init");
    }
  })

  return(
    <div>
      <div>
        <span>title:{title}</span>
        <Input value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div>
        <span>header:{header}</span>
        <Input value={header} onChange={(e) => setHeader(e.target.value)}/>
      </div>
      <div>{}</div>
    </div>
  );
}