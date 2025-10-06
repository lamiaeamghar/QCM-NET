import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fe15e62c = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _0a2d92ca = () => interopDefault(import('..\\pages\\about-02\\index.vue' /* webpackChunkName: "pages/about-02/index" */))
const _11d82e86 = () => interopDefault(import('..\\pages\\become-an-instructor\\index.vue' /* webpackChunkName: "pages/become-an-instructor/index" */))
const _3f8380bb = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _43d57712 = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _076a891a = () => interopDefault(import('..\\pages\\contact-us-02\\index.vue' /* webpackChunkName: "pages/contact-us-02/index" */))
const _68e6bb3a = () => interopDefault(import('..\\pages\\course-hub\\index.vue' /* webpackChunkName: "pages/course-hub/index" */))
const _32899c9f = () => interopDefault(import('..\\pages\\courses\\index.vue' /* webpackChunkName: "pages/courses/index" */))
const _1d8ccd03 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _474b1ec3 = () => interopDefault(import('..\\pages\\education-center\\index.vue' /* webpackChunkName: "pages/education-center/index" */))
const _97bc7886 = () => interopDefault(import('..\\pages\\event\\index.vue' /* webpackChunkName: "pages/event/index" */))
const _2bc34d60 = () => interopDefault(import('..\\pages\\faqs\\index.vue' /* webpackChunkName: "pages/faqs/index" */))
const _69f31ba1 = () => interopDefault(import('..\\pages\\instructors\\index.vue' /* webpackChunkName: "pages/instructors/index" */))
const _25f0adbb = () => interopDefault(import('..\\pages\\language-academic\\index.vue' /* webpackChunkName: "pages/language-academic/index" */))
const _57217f8e = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _48dab98a = () => interopDefault(import('..\\pages\\membership-plans\\index.vue' /* webpackChunkName: "pages/membership-plans/index" */))
const _e3c495aa = () => interopDefault(import('..\\pages\\online-academy\\index.vue' /* webpackChunkName: "pages/online-academy/index" */))
const _1a437e66 = () => interopDefault(import('..\\pages\\privacy-policy\\index.vue' /* webpackChunkName: "pages/privacy-policy/index" */))
const _70fb359a = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _526c5a3c = () => interopDefault(import('..\\pages\\terms-condition\\index.vue' /* webpackChunkName: "pages/terms-condition/index" */))
const _13bee80f = () => interopDefault(import('..\\pages\\university\\index.vue' /* webpackChunkName: "pages/university/index" */))
const _1297bc05 = () => interopDefault(import('..\\pages\\zoom-meetings\\index.vue' /* webpackChunkName: "pages/zoom-meetings/index" */))
const _05887eca = () => interopDefault(import('..\\pages\\blog\\blog-grid-basic.vue' /* webpackChunkName: "pages/blog/blog-grid-basic" */))
const _0f56caca = () => interopDefault(import('..\\pages\\blog\\blog-left-sidebar.vue' /* webpackChunkName: "pages/blog/blog-left-sidebar" */))
const _be249396 = () => interopDefault(import('..\\pages\\blog\\blog-list-layout.vue' /* webpackChunkName: "pages/blog/blog-list-layout" */))
const _77fd82e3 = () => interopDefault(import('..\\pages\\courses\\basic-grid-layout\\index.vue' /* webpackChunkName: "pages/courses/basic-grid-layout/index" */))
const _e39bfb8a = () => interopDefault(import('..\\pages\\courses\\basic-list-layout\\index.vue' /* webpackChunkName: "pages/courses/basic-list-layout/index" */))
const _5ec55890 = () => interopDefault(import('..\\pages\\courses\\grid-left-sidebar\\index.vue' /* webpackChunkName: "pages/courses/grid-left-sidebar/index" */))
const _ea6f0512 = () => interopDefault(import('..\\pages\\courses\\search\\index.vue' /* webpackChunkName: "pages/courses/search/index" */))
const _43047984 = () => interopDefault(import('..\\pages\\event\\event-grid.vue' /* webpackChunkName: "pages/event/event-grid" */))
const _1bbd7c96 = () => interopDefault(import('..\\pages\\event\\event-list.vue' /* webpackChunkName: "pages/event/event-list" */))
const _2e61ada5 = () => interopDefault(import('..\\pages\\event\\event-list-sidebar.vue' /* webpackChunkName: "pages/event/event-list-sidebar" */))
const _a8137146 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _7452aaf5 = () => interopDefault(import('..\\pages\\blog\\category\\_slug.vue' /* webpackChunkName: "pages/blog/category/_slug" */))
const _61d2a3d2 = () => interopDefault(import('..\\pages\\blog\\tag\\_slug.vue' /* webpackChunkName: "pages/blog/tag/_slug" */))
const _db3b8c4e = () => interopDefault(import('..\\pages\\courses\\category\\_slug.vue' /* webpackChunkName: "pages/courses/category/_slug" */))
const _f097b37c = () => interopDefault(import('..\\pages\\courses\\tag\\_tag.vue' /* webpackChunkName: "pages/courses/tag/_tag" */))
const _4be53140 = () => interopDefault(import('..\\pages\\instructors\\profile\\_slug\\index.vue' /* webpackChunkName: "pages/instructors/profile/_slug/index" */))
const _2d200934 = () => interopDefault(import('..\\pages\\instructors\\profile\\_slug\\assignments.vue' /* webpackChunkName: "pages/instructors/profile/_slug/assignments" */))
const _5b5228b4 = () => interopDefault(import('..\\pages\\instructors\\profile\\_slug\\courses.vue' /* webpackChunkName: "pages/instructors/profile/_slug/courses" */))
const _c1a8709c = () => interopDefault(import('..\\pages\\instructors\\profile\\_slug\\enrolled-courses.vue' /* webpackChunkName: "pages/instructors/profile/_slug/enrolled-courses" */))
const _6a209df2 = () => interopDefault(import('..\\pages\\instructors\\profile\\_slug\\my-students.vue' /* webpackChunkName: "pages/instructors/profile/_slug/my-students" */))
const _69a439ca = () => interopDefault(import('..\\pages\\instructors\\profile\\_slug\\purchase-history.vue' /* webpackChunkName: "pages/instructors/profile/_slug/purchase-history" */))
const _2858d289 = () => interopDefault(import('..\\pages\\instructors\\profile\\_slug\\reviews.vue' /* webpackChunkName: "pages/instructors/profile/_slug/reviews" */))
const _3c131172 = () => interopDefault(import('..\\pages\\instructors\\profile\\_slug\\wishlist.vue' /* webpackChunkName: "pages/instructors/profile/_slug/wishlist" */))
const _54c1a20c = () => interopDefault(import('..\\pages\\instructors\\profile\\_slug\\withdraw.vue' /* webpackChunkName: "pages/instructors/profile/_slug/withdraw" */))
const _3dccdf73 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _27fc9ec2 = () => interopDefault(import('..\\pages\\course-category\\_slug.vue' /* webpackChunkName: "pages/course-category/_slug" */))
const _30d2fb57 = () => interopDefault(import('..\\pages\\courses\\_slug.vue' /* webpackChunkName: "pages/courses/_slug" */))
const _9b29bb16 = () => interopDefault(import('..\\pages\\event\\_slug.vue' /* webpackChunkName: "pages/event/_slug" */))
const _2a0cac18 = () => interopDefault(import('..\\pages\\faqs\\_slug.vue' /* webpackChunkName: "pages/faqs/_slug" */))
const _10e11abd = () => interopDefault(import('..\\pages\\zoom-meetings\\_slug.vue' /* webpackChunkName: "pages/zoom-meetings/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _fe15e62c,
    name: "about"
  }, {
    path: "/about-02",
    component: _0a2d92ca,
    name: "about-02"
  }, {
    path: "/become-an-instructor",
    component: _11d82e86,
    name: "become-an-instructor"
  }, {
    path: "/blog",
    component: _3f8380bb,
    name: "blog"
  }, {
    path: "/contact-us",
    component: _43d57712,
    name: "contact-us"
  }, {
    path: "/contact-us-02",
    component: _076a891a,
    name: "contact-us-02"
  }, {
    path: "/course-hub",
    component: _68e6bb3a,
    name: "course-hub"
  }, {
    path: "/courses",
    component: _32899c9f,
    name: "courses"
  }, {
    path: "/dashboard",
    component: _1d8ccd03,
    name: "dashboard"
  }, {
    path: "/education-center",
    component: _474b1ec3,
    name: "education-center"
  }, {
    path: "/event",
    component: _97bc7886,
    name: "event"
  }, {
    path: "/faqs",
    component: _2bc34d60,
    name: "faqs"
  }, {
    path: "/instructors",
    component: _69f31ba1,
    name: "instructors"
  }, {
    path: "/language-academic",
    component: _25f0adbb,
    name: "language-academic"
  }, {
    path: "/login",
    component: _57217f8e,
    name: "login"
  }, {
    path: "/membership-plans",
    component: _48dab98a,
    name: "membership-plans"
  }, {
    path: "/online-academy",
    component: _e3c495aa,
    name: "online-academy"
  }, {
    path: "/privacy-policy",
    component: _1a437e66,
    name: "privacy-policy"
  }, {
    path: "/register",
    component: _70fb359a,
    name: "register"
  }, {
    path: "/terms-condition",
    component: _526c5a3c,
    name: "terms-condition"
  }, {
    path: "/university",
    component: _13bee80f,
    name: "university"
  }, {
    path: "/zoom-meetings",
    component: _1297bc05,
    name: "zoom-meetings"
  }, {
    path: "/blog/blog-grid-basic",
    component: _05887eca,
    name: "blog-blog-grid-basic"
  }, {
    path: "/blog/blog-left-sidebar",
    component: _0f56caca,
    name: "blog-blog-left-sidebar"
  }, {
    path: "/blog/blog-list-layout",
    component: _be249396,
    name: "blog-blog-list-layout"
  }, {
    path: "/courses/basic-grid-layout",
    component: _77fd82e3,
    name: "courses-basic-grid-layout"
  }, {
    path: "/courses/basic-list-layout",
    component: _e39bfb8a,
    name: "courses-basic-list-layout"
  }, {
    path: "/courses/grid-left-sidebar",
    component: _5ec55890,
    name: "courses-grid-left-sidebar"
  }, {
    path: "/courses/search",
    component: _ea6f0512,
    name: "courses-search"
  }, {
    path: "/event/event-grid",
    component: _43047984,
    name: "event-event-grid"
  }, {
    path: "/event/event-list",
    component: _1bbd7c96,
    name: "event-event-list"
  }, {
    path: "/event/event-list-sidebar",
    component: _2e61ada5,
    name: "event-event-list-sidebar"
  }, {
    path: "/",
    component: _a8137146,
    name: "index"
  }, {
    path: "/blog/category/:slug?",
    component: _7452aaf5,
    name: "blog-category-slug"
  }, {
    path: "/blog/tag/:slug?",
    component: _61d2a3d2,
    name: "blog-tag-slug"
  }, {
    path: "/courses/category/:slug?",
    component: _db3b8c4e,
    name: "courses-category-slug"
  }, {
    path: "/courses/tag/:tag?",
    component: _f097b37c,
    name: "courses-tag-tag"
  }, {
    path: "/instructors/profile/:slug",
    component: _4be53140,
    name: "instructors-profile-slug"
  }, {
    path: "/instructors/profile/:slug?/assignments",
    component: _2d200934,
    name: "instructors-profile-slug-assignments"
  }, {
    path: "/instructors/profile/:slug?/courses",
    component: _5b5228b4,
    name: "instructors-profile-slug-courses"
  }, {
    path: "/instructors/profile/:slug?/enrolled-courses",
    component: _c1a8709c,
    name: "instructors-profile-slug-enrolled-courses"
  }, {
    path: "/instructors/profile/:slug?/my-students",
    component: _6a209df2,
    name: "instructors-profile-slug-my-students"
  }, {
    path: "/instructors/profile/:slug?/purchase-history",
    component: _69a439ca,
    name: "instructors-profile-slug-purchase-history"
  }, {
    path: "/instructors/profile/:slug?/reviews",
    component: _2858d289,
    name: "instructors-profile-slug-reviews"
  }, {
    path: "/instructors/profile/:slug?/wishlist",
    component: _3c131172,
    name: "instructors-profile-slug-wishlist"
  }, {
    path: "/instructors/profile/:slug?/withdraw",
    component: _54c1a20c,
    name: "instructors-profile-slug-withdraw"
  }, {
    path: "/blog/:slug",
    component: _3dccdf73,
    name: "blog-slug"
  }, {
    path: "/course-category/:slug?",
    component: _27fc9ec2,
    name: "course-category-slug"
  }, {
    path: "/courses/:slug",
    component: _30d2fb57,
    name: "courses-slug"
  }, {
    path: "/event/:slug",
    component: _9b29bb16,
    name: "event-slug"
  }, {
    path: "/faqs/:slug",
    component: _2a0cac18,
    name: "faqs-slug"
  }, {
    path: "/zoom-meetings/:slug?",
    component: _10e11abd,
    name: "zoom-meetings-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
