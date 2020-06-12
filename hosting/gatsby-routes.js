const { resolve } = require('path')

module.exports = [
  /* ---- Landing ---- */
  { path: '/', component: resolve(`src/ui/pages/landing.tsx`) },
  { path: '/fr', component: resolve(`src/ui/pages/landing.tsx`) },

  /* ---- Blog ---- */
  { path: '/blog', component: resolve(`src/ui/pages/blog.tsx`) },

  /* ---- Community ---- */
  { matchPath: '/community/:cid', path: '/community', component: resolve(`src/ui/pages/community.tsx`) },

  /* ---- Dashboard ---- */
  { path: '/dashboard', component: resolve(`src/ui/pages/dashboard.tsx`) },

  /* ---- Replies ---- */
  { matchPath: '/community/:cid/:pid', path: '/replies', component: resolve(`src/ui/pages/replies.tsx`) },

  /* ---- Privacy ---- */
  { path: '/privacy', component: resolve(`src/ui/pages/privacy.tsx`) },
  { path: '/fr/privacy', component: resolve(`src/ui/pages/privacy.tsx`) },

  /* ---- Styleguide ---- */
  { path: '/styleguide', component: resolve(`src/ui/pages/styleguide.tsx`) },
  { path: '/fr/styleguide', component: resolve(`src/ui/pages/styleguide.tsx`) },

  /* ---- Terms ---- */
  { path: '/terms', component: resolve(`src/ui/pages/terms.tsx`) },
  { path: '/fr/terms', component: resolve(`src/ui/pages/terms.tsx`) },

  /* ---- 404 ---- */
  { path: '/404', component: resolve(`src/ui/pages/404.tsx`) }
]
