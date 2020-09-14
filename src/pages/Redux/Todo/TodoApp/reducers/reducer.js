const initState = {
  visible: "showAll",
  todos: [
    {
      index: 1,
      text: "上班打卡",
      status: "1",
    },
    {
      index: 2,
      text: "下班打卡",
      status: "-1",
    }
  ],
}

function todoApp(state, action) {
  if(typeof action === "undefined") {
    return initState;
  }
  switch(action.type) {
    case "addTodo": {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            status: action.status,
            index: action.index
          }
        ]
      }
    }
    case "setVisible": {
      return {
        ...state,
        visible: action.visible,
      }
    }
    case "toggleStatus": {
      const newTodos = state.todos.map(current => {
        /* eslint-disable eqeqeq */
        if(action.index == current.index) {
          return {
            ...current,
            status: action.status,
          }
        }
        return current;
      })
      console.log("todo", newTodos);
      return {
        ...state,
        todos: newTodos,
      }
    }
    default: {
      return initState;
    }
  }
}

export default todoApp;