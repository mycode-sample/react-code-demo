import { createStore, applyMiddleware } from 'redux';
import calc from './reducers';

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

const store = createStore(calc, applyMiddleware(addLog, addCrash));

export default store;