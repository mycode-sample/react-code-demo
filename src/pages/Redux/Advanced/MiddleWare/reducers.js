import { operate } from "./utils";

const init = {
  left: 0,
  right: 0,
  operate: "none",
  result: 0,
  message: "",
};

function calc(state, actions) {
  // 初始化
  if(typeof actions === "undefined") {
    return init;
  }
  const { payload } = actions;
  switch(actions.type) {
    case "add": {
      return {
        ...payload,
        result: Number(payload.left) + Number(payload.right),
      };
    }
    case "subtract": {
      return {
        ...payload,
        result: Number(payload.left) - Number(payload.right),
      }
    }
    case "multiply": {
      return {
        ...payload,
        result: Number(payload.left) * Number(payload.right),
      }
    }
    case "divide": {
      return {
        ...payload,
        result: Number(payload.left) / Number(payload.right),
      }
    }
    default: {
      return init;
    }
  }
}

export default calc;