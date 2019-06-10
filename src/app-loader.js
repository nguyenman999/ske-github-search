import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import configStore from './configure-store'
import history from './history'
import App from './app'
import Test1 from './test-1/test-1-container'

const store = configStore()

const AppLoader = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/test1" component={Test1} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default AppLoader
