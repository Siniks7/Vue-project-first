import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routerHistory = createWebHashHistory()

import AboutPage from './pages/about'
import HomePage from './pages/home'
import NotFoundPage from './pages/notFound'

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/:CatchAll(.*)',
      name: '404',
      component: NotFoundPage
    }
  ]
})

export default routers
