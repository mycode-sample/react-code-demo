const initState = {
  num: 1,
  today: "mon",
  user: {
    name: "demo",
    age: 14,
  }
};

export default function demo(state, action) {
  if(typeof action === "undefined") {
    return initState;
  }
  switch(action.type) {
    case "demo/add": {
      return {
        num: state.num + 1,
      }
    }
    default: {
      return initState;
    }
  }
}