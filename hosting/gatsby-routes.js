const { resolve } = require('path')

module.exports = [
  /* ---- Landing ---- */
  { path: '/', component: resolve(`src/ui/pages/App.tsx`) },

  /* ---- Blog ---- */
  { path: '/blog', component: resolve(`src/ui/pages/Blog.tsx`) },

  /* ---- Dashboard ---- */
  { path: '/dashboard', component: resolve(`src/ui/pages/Dashboard.tsx`) },

  /* ---- Privacy ---- */
  { path: '/privacy', component: resolve(`src/ui/pages/Privacy.tsx`) },
  // { path: '/fr/privacy', component: resolve(`src/ui/pages/privacy.tsx`) },

  /* ---- Styleguide ---- */
  { path: '/styleguide', component: resolve(`src/ui/pages/Styleguide.tsx`) },
  // { path: '/fr/styleguide', component: resolve(`src/ui/pages/styleguide.tsx`) },

  /* ---- Terms ---- */
  { path: '/terms', component: resolve(`src/ui/pages/Terms.tsx`) },
  // { path: '/fr/terms', component: resolve(`src/ui/pages/terms.tsx`) },

  /* ---- 404 ---- */
  { path: '/404', component: resolve(`src/ui/pages/404.tsx`) },

  /* ---- Posts ---- */
  { matchPath: '/:cid', path: '/router', component: resolve(`src/ui/pages/App.tsx`) },

  /* ---- Replies ---- */
  { matchPath: '/:cid/*', path: '/router', component: resolve(`src/ui/pages/App.tsx`) }
]
