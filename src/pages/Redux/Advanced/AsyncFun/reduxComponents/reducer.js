const initState = {
  currentTime: "",
  customTime: "",
  currentTime2: "",
  customTime2: "",
  msg: "",
  status: "success",
};

export function timeTool(state, action) {
  if(typeof action.type === "undefined") {
    console.log("init state");
    return initState;
  }
  const { payload } = action;
  switch(action.type) {
    case "success": {
      return {
        ...state,
        ...payload,
      }
    }
    case "fail": {
      return {
        ...state,
        ...payload,
      }
    }
    case "pending": {
      return {
        ...state,
        ...payload,
      }
    }
    case "setCurrentTime": {
      return {
        ...state,
        ...payload,
      }
    }
    case "setCustomTime": {
      return {
        ...state,
        ...payload,
      }
    }
    default: return initState;
  }
}