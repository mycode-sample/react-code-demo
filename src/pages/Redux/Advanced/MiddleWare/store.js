import { createStore } from 'redux';
import calc from './reducers';

const store = createStore(calc);

const next = store.dispatch;

store.dispatch = (actions) => {
  console.log("before", store.getState());
  next(actions);
  console.log("after", store.getState());
};

export default store;