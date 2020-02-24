import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

export const Link = styled('a')({
  ...theme.FOCUS_OUTLINE,
  ...theme.HOVER_TEXT,
  color: theme.PRIMARY_COLOR,
  fontFamily: theme.FONT_BODY,
  fontWeight: theme.FONT_REGULAR,
  fontSize: theme.FONT_MEDIUM,
})
