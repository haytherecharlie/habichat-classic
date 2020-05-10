import styled from 'styled-components'
import theme from 'assets/theme'

export const Article = styled('article')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  '& > p': {
    fontSize: theme.FONT_M,
    fontWeight: 300
  }
})
