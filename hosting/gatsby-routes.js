const path = require('path')

module.exports = [

  /* ---- Web ---- */
  // Landing
  { path: '/', component: path.resolve(`src/ui/screens/landing.web.tsx`) },
  { path: '/fr', component: path.resolve(`src/ui/screens/landing.web.tsx`) },
  // Blog
  { path: '/blog', component: path.resolve(`src/ui/screens/blog.web.tsx`) },
  { path: '/fr/blog', component: path.resolve(`src/ui/screens/blog.web.tsx`) },
  // Privacy
  { path: '/privacy', component: path.resolve(`src/ui/screens/privacy.web.tsx`) },
  { path: '/fr/privacy', component: path.resolve(`src/ui/screens/privacy.web.tsx`) },
  // Terms
  { path: '/terms', component: path.resolve(`src/ui/screens/terms.web.tsx`) },
  { path: '/fr/terms', component: path.resolve(`src/ui/screens/terms.web.tsx`) },

  /* ---- App ---- */
  // Community
  { path: '/app/community', component: path.resolve(`src/ui/screens/community.app.tsx`) },
  // Post
  { path: '/app/post', component: path.resolve(`src/ui/screens/post.app.tsx`) },

  /* ---- Universal ---- */
  // 404
  { path: '/404/', component: path.resolve(`src/ui/screens/404.web.tsx`) },
  // Styleguide
  { path: '/styleguide', component: path.resolve(`src/ui/screens/styleguide.web.tsx`) },
  { path: '/fr/styleguide', component: path.resolve(`src/ui/screens/styleguide.web.tsx`) },


  // Dashboard
  // { path: '/dashboard', component: path.resolve(`src/ui/screens/dashboard.admin.tsx`) }
]
