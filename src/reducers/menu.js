const initState = {
  current: "none",
  lastMenu: "index",
};

export default function global(state, action) {
  if(action === undefined) {
    return initState;
  }
  switch(action.type) {
    case "change": {
      return {
        current: "changed",
      }
    }
    case "reset": {
      return {
        current: "none",
      }
    }
    default: {
      return initState;
    }
  }
}