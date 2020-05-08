import React from 'react'
// import Text from 'atoms/Text'

const ArticleLayout = (props) => {
  console.log(props)
  // const {
  //   markdownRemark: { frontmatter, html }
  // } = data

  return (
    <div>
      <span>Blog</span>
      {/* <Text size="h1" text={'Blog'} unique /> */}
      {/* <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      /> */}
    </div>
  )
}

export default ArticleLayout
