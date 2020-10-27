import React from 'react'
import BlogPost from 'ui/entities/BlogPost'
import useBlogPosts from 'ui/hooks/useBlogPosts'
import PageLayout from 'ui/layouts/PageLayout'

const BlogPage = () => {
  const posts = useBlogPosts()

  return (
    <PageLayout page="blog" crawl={true}>
      {posts.allMarkdownRemark.edges.map(({ node }, id) => <BlogPost key={id} frontmatter={node.frontmatter} html={node.html} />)}
    </PageLayout>
  )
}

export default BlogPage
