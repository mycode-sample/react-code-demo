// import fetch from 'cross-fetch';

// 异步
export function getCurrentTime() {
  return function fetchCurrentTime(dispatch) {
    dispatch(pending());
    return fetch("http://127.0.0.1:8080/api/common/currentTime")
      .then(
        response => response.json(),
        error => console.log("error", error)
      )
      .then(res => {
        if(res.msg === "ok") {
          dispatch(setCurrentTime({
            currentTime2: res.data.currentTime,
            status: "success",
            msg: "ok",
          }))
        } else {
          dispatch(fail())
        }
      })
  }
}

export function getCustomTime(params) {
  return {
    type: "getCustomTime",
    payload: params,
  }
}

// 改变state

export function pending(params) {
  return {
    type: "pending",
    payload: params,
  }
}

export function success(params) {
  return {
    type: "success",
    payload: params,
  }
}

export function fail(params) {
  return {
    type: "fail",
    payload: params,
  }
}

export function setCurrentTime(params) {
  return {
    type: "setCurrentTime",
    payload: params,
  }
}

export function setCustomTime(params) {
  return {
    type: "setCustomTime",
    payload: params,
  }
}