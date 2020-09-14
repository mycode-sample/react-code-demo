import React from 'react';
function Div() {
  return <span style={{color: "#1890ff"}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
}

export default function GlobalFooter(props) {
  return(
    <div style={{textAlign: "center"}}>
      <p>© 2020 notfound</p>
      <p>
        <a href="https://react.docschina.org/">React v16.13.1</a><Div/>
        <a href="https://ant-design.gitee.io/index-cn">antd v4.3.1</a><Div/>
        <a href="https://github.com/jamiebuilds/react-loadable">react-loadable 5.5.0</a><Div/>
        <a href="https://reactrouter.com/web/guides/quick-start">react-router-dom 5.2.1</a><Div/>
      </p>
    </div>
  );
}