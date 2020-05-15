import styled from 'styled-components'
import theme from 'assets/theme'

export const Article = styled('article')({
  boxSizing: 'border-box',
  padding: `1rem`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  maxWidth: theme.LARGE_VIEW,
  '& > p': {
    marginTop: 5,
    fontSize: theme.FONT_XS,
    fontWeight: 300
  }
})

export const Body = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  lineHeight: `1.5rem`,
  color: `#fff`,
  '& > p': {
    textAlign: 'left',
    fontWeight: 200,
    '& > a': {
      color: `#CCC`
    }
  }
})
