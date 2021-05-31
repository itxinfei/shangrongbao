import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _34b9c828 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _0bde0da2 = () => interopDefault(import('..\\pages\\lend\\index.vue' /* webpackChunkName: "pages/lend/index" */))
const _54dfc7bc = () => interopDefault(import('..\\pages\\user.vue' /* webpackChunkName: "pages/user" */))
const _d05cbd74 = () => interopDefault(import('..\\pages\\user\\index.vue' /* webpackChunkName: "pages/user/index" */))
const _4ccd278c = () => interopDefault(import('..\\pages\\user\\user1.vue' /* webpackChunkName: "pages/user/user1" */))
const _4cb0f88a = () => interopDefault(import('..\\pages\\user\\user2.vue' /* webpackChunkName: "pages/user/user2" */))
const _5d77108a = () => interopDefault(import('..\\pages\\lend\\_id.vue' /* webpackChunkName: "pages/lend/_id" */))
const _055af6b1 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _34b9c828,
    name: "about"
  }, {
    path: "/lend",
    component: _0bde0da2,
    name: "lend"
  }, {
    path: "/user",
    component: _54dfc7bc,
    children: [{
      path: "",
      component: _d05cbd74,
      name: "user"
    }, {
      path: "user1",
      component: _4ccd278c,
      name: "user-user1"
    }, {
      path: "user2",
      component: _4cb0f88a,
      name: "user-user2"
    }]
  }, {
    path: "/lend/:id",
    component: _5d77108a,
    name: "lend-id"
  }, {
    path: "/",
    component: _055af6b1,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
