import { createStore } from 'redux';
import calc from './reducers';

const store = createStore(calc);


function addLog(store) {
  const next = store.dispatch;
  store.dispatch = function(actions) {
    console.log("before", store.getState());
    next(actions);
    console.log("after", store.getState());
  };
}

function addCrash(store) {
  const next = store.dispatch;
  store.dispatch = function(actions) {
    try {
      return next(actions);
    } catch (err) {
      console.log("errors");
      console.log(err);
    }
  };
}

addLog(store);
addCrash(store);

export default store;