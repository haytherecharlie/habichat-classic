import React from 'react'
import BlogPost from 'ui/components/BlogPost'
import useBlogEntries from 'ui/hooks/useBlogEntries'
import PageLayout from 'ui/layouts/PageLayout'

const Blog = () => {
  const data = useBlogEntries()
  return (
    <PageLayout page="blog" crawl={true}>
      {data.allMarkdownRemark.edges.map(({ node }, id) => <BlogPost key={id} frontmatter={node.frontmatter} html={node.html} />)}
    </PageLayout>
  )
}

export default Blog
