import { createStore } from 'redux';
import calc from './reducers';

let store = createStore(calc);

function addLog(store) {
  return function getNext(next) {
    return function logger(actions) {
      console.log("before", store.getState());
      let result = next(actions);
      console.log("after", store.getState());
      return result;
    };
  };
}

function addCrash() {
  return function getNext(next)  {
    return function crash(actions) {
      try {
        return next(actions);
      } catch (err) {
        console.log("errors");
        console.log(err);
      }
    };
  };
}

function applyMiddleWare(store, middleWare) {
  middleWare = middleWare.slice();
  middleWare.reverse();

  let dispatch = store.dispatch;

  middleWare.forEach(current => (dispatch = current(store)(dispatch)));

  return Object.assign({}, store, { dispatch });
}

store = applyMiddleWare(store, [addLog, addCrash]);

export default store;