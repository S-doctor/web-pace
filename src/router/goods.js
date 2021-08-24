// 这边是页面显示的路由
import Loadable from 'react-loadable';
// import Loading from '@/components/Loading'
const Goods = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'../view/goods/goods'),loading: ()=>(<div>加载中...</div>)});
const LookDetails = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'../view/lookDetails/lookDetails'),loading: ()=>(<div>加载中...</div>)});


export default [
  { path: "/Goods", component: Goods },
  { path: "/LookDetails", component: LookDetails },
];