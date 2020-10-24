import { createStore } from 'redux';
import calc from './reducers';

const store = createStore(calc);


function addLog(store) {
  const next = store.dispatch;
  return function logger(actions) {
    console.log("before", store.getState());
    const result = next(actions);
    console.log("after", store.getState());
    return result;
  };
}

function addCrash(store) {
  const next = store.dispatch;
  return function crash(actions) {
    try {
      return next(actions);
    } catch (err) {
      console.log("errors");
      console.log(err);
    }
  };
}

function applyMiddleWare(store, middleWare) {
  middleWare = middleWare.slice();
  middleWare.reverse();

  middleWare.forEach(current => (store.dispatch = current(store)));
}

applyMiddleWare(store, [addLog, addCrash]);

export default store;