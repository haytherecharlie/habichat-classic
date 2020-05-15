const path = require('path')

module.exports = [
  // Blog . Web
  { path: '/blog', component: path.resolve(`src/screens/blog.web.tsx`) },
  // Home . Web
  { path: '/', component: path.resolve(`src/screens/home.web.tsx`) },
  { path: '/fr', component: path.resolve(`src/screens/home.web.tsx`) },
  // Privacy . Web
  { path: '/privacy', component: path.resolve(`src/screens/privacy.web.tsx`) },
  { path: '/fr/privacy', component: path.resolve(`src/screens/privacy.web.tsx`) },
  // Recaptcha . Web
  { path: '/recaptcha', component: path.resolve(`src/screens/recaptcha.web.tsx`) },
  // Styleguide . Web
  { path: '/styleguide', component: path.resolve(`src/screens/styleguide.web.tsx`) },
  // Terms . Web
  { path: '/terms', component: path.resolve(`src/screens/terms.web.tsx`) },
  { path: '/fr/terms', component: path.resolve(`src/screens/terms.web.tsx`) }
]
