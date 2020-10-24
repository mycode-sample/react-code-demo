export function add(payload) {
  return {
    type: "add",
    payload,
  };
}

export function subtract(payload) {
  return {
    type: "subtract",
    payload,
  };
}

export function multiply(payload) {
  return {
    type: "multiply",
    payload,
  }
}

export function divide(payload) {
  return {
    type: "divide",
    payload,
  }
}