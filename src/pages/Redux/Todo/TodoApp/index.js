import { Button, Input, message, Table } from 'antd';
import React, { useState } from 'react';
import { connect, Provider } from 'react-redux';
import store from './store';
import * as actions from './actions/action';

/* eslint-disable eqeqeq */

function TodoApp(props) {
  const [value, setValue] = useState("");

  function onChange(e) {
    if(e) {
      e.preventDefault();
    }
    setValue(e.target.value);
  }

  function renderOptions(text, index) {
    const { dispatch } = props;

    if(text.status === "-1") {
      return(
        <div>
          <Button onClick={() => dispatch(actions.toggleStatus({
            index: index + 1,
            status: "0",
          }))}>开始</Button>
          <Button onClick={() => dispatch(actions.toggleStatus({
            index: index + 1,
            status: "1",
          }))}>完成</Button>
          <Button onClick={() => dispatch(actions.toggleStatus({
            index: index + 1,
            status: "-1",
          }))}>重置</Button>
        </div>
      );
    }
    if(text.status == 0) {
      return(
        <div>
          <Button onClick={() => dispatch(actions.toggleStatus({
            index: index + 1,
            status: "1",
          }))}>完成</Button>
          <Button onClick={() => dispatch(actions.toggleStatus({
            index: index + 1,
            status: "-1",
          }))}>重置</Button>
        </div>
      );
    }
    if(text.status == 1) {
      return(
        <Button onClick={() => dispatch(actions.toggleStatus({
          index: index + 1,
          status: "-1",
        }))}>重置</Button>
      );
    }
  }

  const addTodo = () => {
    const { dispatch } = props;
    if(value.length === 0 || !value) {
      message.warn("不允许添加空代办");
      return;
    }
    dispatch(actions.addTodo({
      text: value,
      index: props.todos.length + 1,
      status: "-1",
    }))
  }

  const columns = [
    {
      title: "序号",
      dataIndex: "index",
      width: "10%",
    },
    {
      title: "代办",
      dataIndex: "text",
      width: "60%",
    },
    {
      title: "状态",
      dataIndex: "status",
      width: "10%",
      filters: [
        {
          text: "未开始",
          value: "-1",
        },
        {
          text: "进行中",
          value: "0",
        },
        {
          text: "已完成",
          value: "1",
        },
      ],
      onFilter: (value, record) => value === record.status,
      render: (record, text) => {
        if(text.status === "-1") {
          return "未开始";
        }
        if(text.status === "1") {
          return "已完成";
        }
        return "进行中";
      }
    },
    {
      title: "操作",
      render: (text, record, index) => renderOptions(text, index)
    },
  ];

  return(
    <div>
      <Button onClick={addTodo}>新增代办</Button>
      <Input style={{width: 600}} onChange={onChange} value={value}/>
      <Table
        columns={columns}
        dataSource={props.todos}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    visible: state.visible,
  }
}

const ConnectedTodoApp = connect(mapStateToProps)(TodoApp);

export default function() {
  return(
    <Provider store={store}>
      <ConnectedTodoApp/>
    </Provider>
  );
}