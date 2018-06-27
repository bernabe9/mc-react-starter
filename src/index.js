import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import configureStore from './redux/store/configureStore'
import App from './app/App'
import './styles/styles.scss'

require('./favicon.ico') // Tell webpack to load favicon.ico

const store = configureStore()

const renderApp = (Component) => {
  render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('app'),
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app/App', () => {
    renderApp(App)
  })
}
