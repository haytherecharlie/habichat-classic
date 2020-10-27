const { resolve } = require('path')

module.exports = [
  /* ---- Landing ---- */
  { path: '/', component: resolve(`src/ui/pages/LandingPage.tsx`) },

  /* ---- Blog ---- */
  { path: '/blog', component: resolve(`src/ui/pages/BlogPage.tsx`) },

  /* ---- Privacy ---- */
  { path: '/privacy', component: resolve(`src/ui/pages/PrivacyPage.tsx`) },

  /* ---- Register ---- */
  { path: '/register', component: resolve(`src/ui/pages/RegisterPage.tsx`) },

  /* ---- Styleguide ---- */
  { path: '/styleguide', component: resolve(`src/ui/pages/StyleguidePage.tsx`) },

  /* ---- Terms ---- */
  { path: '/terms', component: resolve(`src/ui/pages/TermsPage.tsx`) },

  /* ---- 404 ---- */
  { path: '/404', component: resolve(`src/ui/pages/404Page.tsx`) }
]
