
// 这边是页面显示的路由
import Loadable from 'react-loadable';
import goods from './goods'
const Login = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'../view/login/login'),loading: ()=>(<div>加载中...</div>)});
const routeList = [
  { path: "/Login", component: Login },
  ...goods
]
export default routeList;