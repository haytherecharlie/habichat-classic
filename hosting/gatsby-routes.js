const { resolve } = require('path')

module.exports = [
  /* ---- Landing ---- */
  { path: '/', component: resolve(`src/ui/pages/App.tsx`) },

  { path: '/auth', component: resolve(`src/ui/pages/Auth.tsx`) },

  /* ---- Blog ---- */
  { path: '/blog', component: resolve(`src/ui/pages/Blog.tsx`) },

  /* ---- Dashboard ---- */
  { path: '/dashboard', component: resolve(`src/ui/pages/Dashboard.tsx`) },

  /* ---- Privacy ---- */
  { path: '/privacy', component: resolve(`src/ui/pages/Privacy.tsx`) },

  /* ---- Styleguide ---- */
  { path: '/styleguide', component: resolve(`src/ui/pages/Styleguide.tsx`) },

  /* ---- Terms ---- */
  { path: '/terms', component: resolve(`src/ui/pages/Terms.tsx`) },

  /* ---- 404 ---- */
  { path: '/404', component: resolve(`src/ui/pages/404.tsx`) },

  /* ---- Posts ---- */
  { matchPath: '/:cid/*', path: '/router', component: resolve(`src/ui/pages/App.tsx`) }
]
