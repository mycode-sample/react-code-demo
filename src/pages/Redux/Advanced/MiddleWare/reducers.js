import { number } from "prop-types";
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
        result: operate(payload, "add"),
      };
    }
    case "subtract": {
      return {
        ...payload,
        result: operate(payload, "subtract"),
      }
    }
    case "multiply": {
      return {
        ...payload,
        result: operate(payload, "multiply"),
      }
    }
    case "divide": {
      return {
        ...payload,
        result: operate(payload, "divide"),
      }
    }
    default: {
      return init;
    }
  }
}

export default calc;