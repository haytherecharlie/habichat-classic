import styled from 'styled-components'
import theme from 'assets/theme'
export const Slide = styled('div')({
  flex: 6,
  alignSelf: `stretch`,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `0 4rem`,
  [theme.SMALL_QUERY]: {
    padding: `0 2rem`
  }
})

export const Footer = styled('div')({
  flex: 1,
  alignItems: 'flex-start',
  padding: `0 4rem`,
  [theme.SMALL_QUERY]: {
    padding: `0 2rem`
  }
})

export const Image = styled('img')({
  width: 250,
  height: `auto`,
  [theme.SMALL_QUERY]: {
    padding: `0 1rem`
  }
})

export const Title = styled('span')({
  ...theme.SPECIAL_FONT,
  color: theme.ACCENT_COLOR,
  fontSize: 25,
  textAlign: (p) => p.align || 'center',
  textTransform: 'none',
  margin: `0 0 15px 0`,
  [theme.SMALL_QUERY]: {
    fontSize: 18
  }
})

export const Paragraph = styled('p')({
  color: theme.ACCENT_COLOR,
  fontSize: 15,
  textAlign: 'center',
  [theme.SMALL_QUERY]: {
    fontSize: 13
  }
})

export const EmailInput = styled('input')({
  width: `100%`
})
