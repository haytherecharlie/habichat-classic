const path = require('path')

module.exports = [
  // 404 . Web
  { path: '/404/', component: path.resolve(`src/screens/404.web.tsx`) },
  // Blog . Web
  { path: '/blog', component: path.resolve(`src/screens/blog.web.tsx`) },
  { path: '/fr/blog', component: path.resolve(`src/screens/blog.web.tsx`) },
  // Community . Web
  { path: '/community', component: path.resolve(`src/screens/community.web.tsx`) },
  { path: '/fr/community', component: path.resolve(`src/screens/community.web.tsx`) },
  // Home . Web
  { path: '/', component: path.resolve(`src/screens/home.web.tsx`) },
  { path: '/fr', component: path.resolve(`src/screens/home.web.tsx`) },
  // Privacy . Web
  { path: '/privacy', component: path.resolve(`src/screens/privacy.web.tsx`) },
  { path: '/fr/privacy', component: path.resolve(`src/screens/privacy.web.tsx`) },
  // Recaptcha . Web
  { path: '/recaptcha', component: path.resolve(`src/screens/recaptcha.web.tsx`) },
  { path: '/fr/recaptcha', component: path.resolve(`src/screens/recaptcha.web.tsx`) },
  // Styleguide . Web
  { path: '/styleguide', component: path.resolve(`src/screens/styleguide.web.tsx`) },
  { path: '/fr/styleguide', component: path.resolve(`src/screens/styleguide.web.tsx`) },
  // Terms . Web
  { path: '/terms', component: path.resolve(`src/screens/terms.web.tsx`) },
  { path: '/fr/terms', component: path.resolve(`src/screens/terms.web.tsx`) },
  // Testing . Web
  { path: '/dashboard', component: path.resolve(`src/screens/dashboard.admin.tsx`) }
]
