import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b1460b3c = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _5314b623 = () => interopDefault(import('..\\pages\\about-02\\index.vue' /* webpackChunkName: "pages/about-02/index" */))
const _3758a20e = () => interopDefault(import('..\\pages\\become-an-instructor\\index.vue' /* webpackChunkName: "pages/become-an-instructor/index" */))
const _23a7f77a = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _3f1f349a = () => interopDefault(import('..\\pages\\contact-us\\index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _b2ec9e2a = () => interopDefault(import('..\\pages\\contact-us-02\\index.vue' /* webpackChunkName: "pages/contact-us-02/index" */))
const _643078c2 = () => interopDefault(import('..\\pages\\course-hub\\index.vue' /* webpackChunkName: "pages/course-hub/index" */))
const _5eac0c17 = () => interopDefault(import('..\\pages\\courses\\index.vue' /* webpackChunkName: "pages/courses/index" */))
const _6a5d830a = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _083ad36a = () => interopDefault(import('..\\pages\\education-center\\index.vue' /* webpackChunkName: "pages/education-center/index" */))
const _4aec9d96 = () => interopDefault(import('..\\pages\\event\\index.vue' /* webpackChunkName: "pages/event/index" */))
const _4b285e30 = () => interopDefault(import('..\\pages\\faqs\\index.vue' /* webpackChunkName: "pages/faqs/index" */))
const _503de1ce = () => interopDefault(import('..\\pages\\instructors\\index.vue' /* webpackChunkName: "pages/instructors/index" */))
const _04482733 = () => interopDefault(import('..\\pages\\language-academic\\index.vue' /* webpackChunkName: "pages/language-academic/index" */))
const _7d896d06 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _051b9ddc = () => interopDefault(import('..\\pages\\membership-plans\\index.vue' /* webpackChunkName: "pages/membership-plans/index" */))
const _2bbd6eb3 = () => interopDefault(import('..\\pages\\online-academy\\index.vue' /* webpackChunkName: "pages/online-academy/index" */))
const _90399024 = () => interopDefault(import('..\\pages\\privacy-policy\\index.vue' /* webpackChunkName: "pages/privacy-policy/index" */))
const _6db295bc = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _25bd6b4c = () => interopDefault(import('..\\pages\\terms-condition\\index.vue' /* webpackChunkName: "pages/terms-condition/index" */))
const _0f08a597 = () => interopDefault(import('..\\pages\\university\\index.vue' /* webpackChunkName: "pages/university/index" */))
const _86529d06 = () => interopDefault(import('..\\pages\\zoom-meetings\\index.vue' /* webpackChunkName: "pages/zoom-meetings/index" */))
const _ca490bba = () => interopDefault(import('..\\pages\\blog\\blog-grid-basic.vue' /* webpackChunkName: "pages/blog/blog-grid-basic" */))
const _78237b5c = () => interopDefault(import('..\\pages\\blog\\blog-left-sidebar.vue' /* webpackChunkName: "pages/blog/blog-left-sidebar" */))
const _9175a4a6 = () => interopDefault(import('..\\pages\\blog\\blog-list-layout.vue' /* webpackChunkName: "pages/blog/blog-list-layout" */))
const _046b306b = () => interopDefault(import('..\\pages\\courses\\basic-grid-layout\\index.vue' /* webpackChunkName: "pages/courses/basic-grid-layout/index" */))
const _1a9fafc3 = () => interopDefault(import('..\\pages\\courses\\basic-list-layout\\index.vue' /* webpackChunkName: "pages/courses/basic-list-layout/index" */))
const _5d0b0140 = () => interopDefault(import('..\\pages\\courses\\grid-left-sidebar\\index.vue' /* webpackChunkName: "pages/courses/grid-left-sidebar/index" */))
const _bdc01622 = () => interopDefault(import('..\\pages\\courses\\search\\index.vue' /* webpackChunkName: "pages/courses/search/index" */))
const _4c70fe74 = () => interopDefault(import('..\\pages\\event\\event-grid.vue' /* webpackChunkName: "pages/event/event-grid" */))
const _17073a1e = () => interopDefault(import('..\\pages\\event\\event-list.vue' /* webpackChunkName: "pages/event/event-list" */))
const _1af9632d = () => interopDefault(import('..\\pages\\event\\event-list-sidebar.vue' /* webpackChunkName: "pages/event/event-list-sidebar" */))
const _b7bb9f4a = () => interopDefault(import('..\\pages\\instructors\\dashboard.vue' /* webpackChunkName: "pages/instructors/dashboard" */))
const _11546485 = () => interopDefault(import('..\\pages\\instructors\\evaluation.vue' /* webpackChunkName: "pages/instructors/evaluation" */))
const _d3ebde36 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _11f2647d = () => interopDefault(import('..\\pages\\blog\\category\\_slug.vue' /* webpackChunkName: "pages/blog/category/_slug" */))
const _7c5b1f8f = () => interopDefault(import('..\\pages\\blog\\tag\\_slug.vue' /* webpackChunkName: "pages/blog/tag/_slug" */))
const _70b9b351 = () => interopDefault(import('..\\pages\\courses\\category\\_slug.vue' /* webpackChunkName: "pages/courses/category/_slug" */))
const _14bbcc8c = () => interopDefault(import('..\\pages\\courses\\tag\\_tag.vue' /* webpackChunkName: "pages/courses/tag/_tag" */))
const _4d2d34b8 = () => interopDefault(import('..\\pages\\instructors\\profile\\_slug\\index.vue' /* webpackChunkName: "pages/instructors/profile/_slug/index" */))
const _d1f4daa8 = () => interopDefault(import('..\\pages\\instructors\\profile\\_slug\\assignments.vue' /* webpackChunkName: "pages/instructors/profile/_slug/assignments" */))
const _bca81dc4 = () => interopDefault(import('..\\pages\\instructors\\profile\\_slug\\courses.vue' /* webpackChunkName: "pages/instructors/profile/_slug/courses" */))
const _3119693a = () => interopDefault(import('..\\pages\\instructors\\profile\\_slug\\enrolled-courses.vue' /* webpackChunkName: "pages/instructors/profile/_slug/enrolled-courses" */))
const _34d53a7f = () => interopDefault(import('..\\pages\\instructors\\profile\\_slug\\my-students.vue' /* webpackChunkName: "pages/instructors/profile/_slug/my-students" */))
const _08dc495c = () => interopDefault(import('..\\pages\\instructors\\profile\\_slug\\purchase-history.vue' /* webpackChunkName: "pages/instructors/profile/_slug/purchase-history" */))
const _10a44ffe = () => interopDefault(import('..\\pages\\instructors\\profile\\_slug\\reviews.vue' /* webpackChunkName: "pages/instructors/profile/_slug/reviews" */))
const _057bbe62 = () => interopDefault(import('..\\pages\\instructors\\profile\\_slug\\wishlist.vue' /* webpackChunkName: "pages/instructors/profile/_slug/wishlist" */))
const _700d4b94 = () => interopDefault(import('..\\pages\\instructors\\profile\\_slug\\withdraw.vue' /* webpackChunkName: "pages/instructors/profile/_slug/withdraw" */))
const _27153a0a = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _02592817 = () => interopDefault(import('..\\pages\\course-category\\_slug.vue' /* webpackChunkName: "pages/course-category/_slug" */))
const _5cf56acf = () => interopDefault(import('..\\pages\\courses\\_slug.vue' /* webpackChunkName: "pages/courses/_slug" */))
const _4e59e026 = () => interopDefault(import('..\\pages\\event\\_slug.vue' /* webpackChunkName: "pages/event/_slug" */))
const _4e95a0c0 = () => interopDefault(import('..\\pages\\faqs\\_slug.vue' /* webpackChunkName: "pages/faqs/_slug" */))
const _89bfdf96 = () => interopDefault(import('..\\pages\\zoom-meetings\\_slug.vue' /* webpackChunkName: "pages/zoom-meetings/_slug" */))

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
    component: _b1460b3c,
    name: "about"
  }, {
    path: "/about-02",
    component: _5314b623,
    name: "about-02"
  }, {
    path: "/become-an-instructor",
    component: _3758a20e,
    name: "become-an-instructor"
  }, {
    path: "/blog",
    component: _23a7f77a,
    name: "blog"
  }, {
    path: "/contact-us",
    component: _3f1f349a,
    name: "contact-us"
  }, {
    path: "/contact-us-02",
    component: _b2ec9e2a,
    name: "contact-us-02"
  }, {
    path: "/course-hub",
    component: _643078c2,
    name: "course-hub"
  }, {
    path: "/courses",
    component: _5eac0c17,
    name: "courses"
  }, {
    path: "/dashboard",
    component: _6a5d830a,
    name: "dashboard"
  }, {
    path: "/education-center",
    component: _083ad36a,
    name: "education-center"
  }, {
    path: "/event",
    component: _4aec9d96,
    name: "event"
  }, {
    path: "/faqs",
    component: _4b285e30,
    name: "faqs"
  }, {
    path: "/instructors",
    component: _503de1ce,
    name: "instructors"
  }, {
    path: "/language-academic",
    component: _04482733,
    name: "language-academic"
  }, {
    path: "/login",
    component: _7d896d06,
    name: "login"
  }, {
    path: "/membership-plans",
    component: _051b9ddc,
    name: "membership-plans"
  }, {
    path: "/online-academy",
    component: _2bbd6eb3,
    name: "online-academy"
  }, {
    path: "/privacy-policy",
    component: _90399024,
    name: "privacy-policy"
  }, {
    path: "/register",
    component: _6db295bc,
    name: "register"
  }, {
    path: "/terms-condition",
    component: _25bd6b4c,
    name: "terms-condition"
  }, {
    path: "/university",
    component: _0f08a597,
    name: "university"
  }, {
    path: "/zoom-meetings",
    component: _86529d06,
    name: "zoom-meetings"
  }, {
    path: "/blog/blog-grid-basic",
    component: _ca490bba,
    name: "blog-blog-grid-basic"
  }, {
    path: "/blog/blog-left-sidebar",
    component: _78237b5c,
    name: "blog-blog-left-sidebar"
  }, {
    path: "/blog/blog-list-layout",
    component: _9175a4a6,
    name: "blog-blog-list-layout"
  }, {
    path: "/courses/basic-grid-layout",
    component: _046b306b,
    name: "courses-basic-grid-layout"
  }, {
    path: "/courses/basic-list-layout",
    component: _1a9fafc3,
    name: "courses-basic-list-layout"
  }, {
    path: "/courses/grid-left-sidebar",
    component: _5d0b0140,
    name: "courses-grid-left-sidebar"
  }, {
    path: "/courses/search",
    component: _bdc01622,
    name: "courses-search"
  }, {
    path: "/event/event-grid",
    component: _4c70fe74,
    name: "event-event-grid"
  }, {
    path: "/event/event-list",
    component: _17073a1e,
    name: "event-event-list"
  }, {
    path: "/event/event-list-sidebar",
    component: _1af9632d,
    name: "event-event-list-sidebar"
  }, {
    path: "/instructors/dashboard",
    component: _b7bb9f4a,
    name: "instructors-dashboard"
  }, {
    path: "/instructors/evaluation",
    component: _11546485,
    name: "instructors-evaluation"
  }, {
    path: "/",
    component: _d3ebde36,
    name: "index"
  }, {
    path: "/blog/category/:slug?",
    component: _11f2647d,
    name: "blog-category-slug"
  }, {
    path: "/blog/tag/:slug?",
    component: _7c5b1f8f,
    name: "blog-tag-slug"
  }, {
    path: "/courses/category/:slug?",
    component: _70b9b351,
    name: "courses-category-slug"
  }, {
    path: "/courses/tag/:tag?",
    component: _14bbcc8c,
    name: "courses-tag-tag"
  }, {
    path: "/instructors/profile/:slug",
    component: _4d2d34b8,
    name: "instructors-profile-slug"
  }, {
    path: "/instructors/profile/:slug?/assignments",
    component: _d1f4daa8,
    name: "instructors-profile-slug-assignments"
  }, {
    path: "/instructors/profile/:slug?/courses",
    component: _bca81dc4,
    name: "instructors-profile-slug-courses"
  }, {
    path: "/instructors/profile/:slug?/enrolled-courses",
    component: _3119693a,
    name: "instructors-profile-slug-enrolled-courses"
  }, {
    path: "/instructors/profile/:slug?/my-students",
    component: _34d53a7f,
    name: "instructors-profile-slug-my-students"
  }, {
    path: "/instructors/profile/:slug?/purchase-history",
    component: _08dc495c,
    name: "instructors-profile-slug-purchase-history"
  }, {
    path: "/instructors/profile/:slug?/reviews",
    component: _10a44ffe,
    name: "instructors-profile-slug-reviews"
  }, {
    path: "/instructors/profile/:slug?/wishlist",
    component: _057bbe62,
    name: "instructors-profile-slug-wishlist"
  }, {
    path: "/instructors/profile/:slug?/withdraw",
    component: _700d4b94,
    name: "instructors-profile-slug-withdraw"
  }, {
    path: "/blog/:slug",
    component: _27153a0a,
    name: "blog-slug"
  }, {
    path: "/course-category/:slug?",
    component: _02592817,
    name: "course-category-slug"
  }, {
    path: "/courses/:slug",
    component: _5cf56acf,
    name: "courses-slug"
  }, {
    path: "/event/:slug",
    component: _4e59e026,
    name: "event-slug"
  }, {
    path: "/faqs/:slug",
    component: _4e95a0c0,
    name: "faqs-slug"
  }, {
    path: "/zoom-meetings/:slug?",
    component: _89bfdf96,
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
