// const { resolve } = require('path')

// exports.onCreatePage = async ({ page: { path }, actions: { createPage } }) => {
//   if (path.match(/^\/community/)) {
//     createPage({
//       path: '/community',
//       matchPath: '/community/:cid',
//       component: resolve(`src/ui/screens/community.app.tsx`)
//     })
//   }

//   if (path.match(/^\/post/)) {
//     createPage({
//       path: '/post',
//       matchPath: '/post/:pid',
//       component: resolve(`src/ui/screens/post.app.tsx`)
//     })
//   }
// }
