export function isEmpty(data) {
  if (data === undefined) {
    return true;
  } else {
    return false;
  }
}
export function isEmptyObj(data) {
  if (Object.keys(data).length === 0) {
    return true;
  } else {
    return false;
  }
}
export function isNumber(data) {
  if (typeof data === "number") {
    return true;
  } else {
    return false;
  }
}
// payload合法性
export function isLegal(payload) {
  // 是否是对象
  if (typeof payload !== "object") {
    return "payload错误";
  }

  // 对象结构
  const keys = Object.keys(payload);
  if (keys.includes("type")
    && keys.includes("operate")
    && keys.includes("left")
    && keys.includes("right")) {
    true;
  } else {
    return "缺少参数";
  }

  // 如果是算数运算，则检查参数
  const operates = ["multiply", "divide", "subtract"];
  if (operates.includes(payload.type)) {
    if (isNumber(payload.left) && isNumber(payload.right)) {
      return true;
    } else {
      return "请输入数字";
    }
  }

  return true;
}
export function operate(payload, type) {
  switch (type) {
    case "add": {
      return Number(payload.left) + Number(payload.right);
    }
    case "subtract": {
      return Number(payload.left) - Number(payload.right);
    }
    case "multiply": {
      return Number(payload.left) * Number(payload.right);
    }
    case "divide": {
      return Number(payload.left) / Number(payload.right);
    }
    default: {
      return 0;
    }
  }
}
