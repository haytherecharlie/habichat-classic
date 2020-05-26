const { resolve } = require('path')

exports.onCreatePage = async ({ page: { path }, actions: { createPage } }) => {
  if (path.match(/^\/community/)) {
    createPage({
      path: '/community',
      matchPath: '/community/:cid',
      component: resolve(`src/screens/community.web.tsx`)
    })
  }

  if (path.match(/^\/post/)) {
    createPage({
      path: '/post',
      matchPath: '/community/:cid/post/:pid',
      component: resolve(`src/screens/post.web.tsx`)
    })
  }
}
