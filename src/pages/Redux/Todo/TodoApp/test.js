import * as actions from './actions/action';
import store from './store';

// 打印初始状态
console.log(store.getState())

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// 发起一系列 action
store.dispatch(actions.addTodo({
  text: '周末去哪玩',
  status: -1,
}))

// 停止监听 state 更新
unsubscribe()