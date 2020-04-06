import styled from 'styled-components'
import theme from 'assets/theme'

export const Wrapper = styled('div')({
  width: `100vw`,
  minHeight: `calc(100vh - ${theme.HEADER_HEIGHT} - ${theme.FOOTER_HEIGHT})`,
  background: theme.BRAND_COLOR,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `20px 0`
})

export const Image = styled('img')({
  height: 250,
  width: 250
})

export const Title = styled('span')({
  fontFamily: 'cocogoose',
  color: theme.WHITE,
  fontSize: 30,
  textAlign: 'center'
})

export const Paragraph = styled('p')({
  fontFamily: 'cocogoose',
  color: theme.WHITE,
  fontSize: 15,
  textAlign: 'center',
  padding: `0 20px`,
  maxWidth: 700
})
