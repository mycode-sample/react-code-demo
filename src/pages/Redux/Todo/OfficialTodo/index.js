import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import rootReducers from './reducers'

const store = createStore(rootReducers)

export default function OfficialTodo() {
  return(
    <div>
      hello
      <Provider store={store}>
        <App />
      </Provider>,
    </div>
  );
}