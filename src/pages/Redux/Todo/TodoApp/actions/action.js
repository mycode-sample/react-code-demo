export function addTodo(params) {
  return {
    type: 'addTodo',
    text: params.text,
    status: '-1',
    index: params.index
  }
}

export function toggleStatus(params) {
  console.log("actions params", params);
  return {
    type: 'toggleStatus',
    ...params,
  }
}

export function setVisibleFilter(params) {
  return {
    type: 'setVisibleFilter',
    ...params
  }
}