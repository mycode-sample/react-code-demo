import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducers from './reducers'
import App from './components/App'

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