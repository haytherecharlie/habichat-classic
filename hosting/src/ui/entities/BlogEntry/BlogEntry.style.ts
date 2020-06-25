import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const BlogEntry = styled('article')({
  boxSizing: 'border-box',
  padding: `2rem 0 1rem 0`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  maxWidth: theme.LARGE_VIEW,
  '& > p': {
    marginTop: 5,
    fontSize: theme.FONT_XS,
    color: theme.PRIMARY_COLOR
  }
})

export const Body = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  lineHeight: `1.5rem`,
  color: `#fff`,
  '& > p': {
    textAlign: 'left',
    fontSize: theme.FONT_S,
    color: theme.PRIMARY_COLOR,
    '& > a': {
      color: theme.PRIMARY_COLOR
    }
  }
})
