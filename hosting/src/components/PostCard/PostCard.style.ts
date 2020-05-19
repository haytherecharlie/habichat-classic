import styled from 'styled-components'
import theme from 'assets/theme'

export const PostCard = styled('div')({
  border: `1px solid ${theme.BRAND_COLOR}`,
  padding: 10,
  margin: `5px 0`,
  flexDirection: 'column'
})

export const DisplayPhoto = styled('img')({
  height: 50,
  width: 50
})
