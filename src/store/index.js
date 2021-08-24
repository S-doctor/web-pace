import {
  createStore,
  applyMiddleware
} from 'redux'
/**
 * Redux store 仅支持同步数据流。使用 thunk 等中间件可以帮助在 Redux 应用中实现异步性。
 * 可以将 thunk 看做 store 的 dispatch() 方法的封装器；我们可以使用 thunk action creator 派遣函数或 Promise，而不是返回 action 对象
 */
import reduxThunk from 'redux-thunk'
import reducer from './reducers'
import {
  composeWithDevTools
} from 'redux-devtools-extension';
const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxThunk)));

export default store