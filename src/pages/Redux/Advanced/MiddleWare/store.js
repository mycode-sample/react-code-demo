import { createStore } from 'redux';
import calc from './reducers';

const store = createStore(calc);

export default store;