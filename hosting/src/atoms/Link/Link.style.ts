import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const Link = styled('a')({
  ...theme.FOCUS_OUTLINE,
  color: theme.PRIMARY_COLOR,
  fontFamily: theme.FONT_BODY,
  fontWeight: theme.FONT_REGULAR,
  fontSize: theme.FONT_MEDIUM,
  '&:hover': {
    opacity: 0.6
  }
})
