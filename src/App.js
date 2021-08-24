import './App.css'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Content from './components/content'
import store from './store'
import routeList from './router'
import 'antd-mobile/dist/antd-mobile.css'
const token = true
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HashRouter>
          <Switch>
            <Redirect exact from="/" to="/goods" />
            {routeList.map((route) => {
              return (
                // route.component来进行渲染
                <Route
                  component={route.component}
                  key={route.path}
                  path={route.path}
                />
              )
            })}
            {/* <Route
              path="/"
              render={() => {
                if (!token) {
                  return <Redirect to="/login" />
                } else {
                  return <Content />
                }
              }}
            /> */}
            <Redirect to="/error/404" />
          </Switch>
        </HashRouter>
      </div>
    </Provider>
  )
}

export default App
