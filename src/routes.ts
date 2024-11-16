import { createRouter, createWebHashHistory } from 'vue-router'

const routerHistory = createWebHashHistory()

import AboutPage from './pages/about.vue'
import HomePage from './pages/home.vue'
import NotFoundPage from './pages/notFound.vue'

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
