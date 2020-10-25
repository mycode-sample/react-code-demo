import { combineReducers, createStore } from 'redux';
import global from './reducers/global';
import menu from './reducers/menu';
import demo from './reducers/demo';

const reducers = combineReducers({global, menu, demo});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;