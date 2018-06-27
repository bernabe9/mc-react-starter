import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from '../src/redux/store/configureStore'
import App from '../src/app/App'
import '../src/styles/styles.scss'

require('../src/favicon.ico') // Tell webpack to load favicon.ico

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = configureStore(preloadedState)

const renderApp = (Component) => {
  hydrate(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('app'),
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept()
}
