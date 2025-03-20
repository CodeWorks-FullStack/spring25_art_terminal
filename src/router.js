import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    // NOTE the ":" denotes that this route requires a route parameter. The name that you give the parameter will be used for the props that you pass to RouterLink and how you access it from the route inside of a vue component
    // a route parameter lets us store some kind of value in the URL that we can access in the component
    path: '/profile/:profileId',
    name: 'Profile Details',
    component: loadPage('ProfilePage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    // NOTE you must be logged in to access this page!
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
