import React from 'react'
import BlogEntry from 'ui/entities/BlogEntry'
import useBlogEntries from 'ui/hooks/useBlogEntries'
import PageLayout from 'ui/layouts/PageLayout'

const Blog = () => {
  const data = useBlogEntries()
  return (
    <PageLayout page="blog" crawl={true}>
      {data.allMarkdownRemark.edges.map(({ node }, id) => <BlogEntry key={id} frontmatter={node.frontmatter} html={node.html} />)}
    </PageLayout>
  )
}

export default Blog
