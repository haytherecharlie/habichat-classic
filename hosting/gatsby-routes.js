const { resolve } = require('path')

module.exports = [
  /* ---- Landing ---- */
  { path: '/', component: resolve(`src/ui/pages/Landing.tsx`) },

  /* ---- Blog ---- */
  { path: '/blog', component: resolve(`src/ui/pages/Blog.tsx`) },

  /* ---- Privacy ---- */
  { path: '/privacy', component: resolve(`src/ui/pages/Privacy.tsx`) },

  /* ---- Styleguide ---- */
  { path: '/styleguide', component: resolve(`src/ui/pages/Styleguide.tsx`) },

  /* ---- Terms ---- */
  { path: '/terms', component: resolve(`src/ui/pages/Terms.tsx`) },
  // { path: '/fr/terms', component: resolve(`src/ui/pages/terms.tsx`) },

  /* ---- 404 ---- */
  { path: '/404', component: resolve(`src/ui/pages/404.tsx`) }
]
