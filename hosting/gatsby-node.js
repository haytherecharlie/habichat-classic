const { resolve } = require('path')

exports.onCreatePage = async ({ page: { path }, actions: { createPage } }) => {
  if (path.match(/^\/app\/community/)) {
    createPage({
      path: '/app/community',
      matchPath: '/app/community/:cid',
      component: resolve(`src/ui/screens/community.app.tsx`)
    })
  }

  if (path.match(/^\/app\/post/)) {
    createPage({
      path: '/app/post',
      matchPath: '/app/community/:cid/post/:pid',
      component: resolve(`src/ui/screens/post.app.tsx`)
    })
  }
}
