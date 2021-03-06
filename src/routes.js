import routesPaths from './constants/routesPaths'
import HomePage from './containers/HomePage'
import NotFoundPage from './containers/NotFoundPage'

const routes = [
  {
    path: routesPaths.index,
    component: HomePage,
    exact: true,
  },
  {
    component: NotFoundPage,
  },
]

export default routes
