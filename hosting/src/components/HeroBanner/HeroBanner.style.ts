import styled from 'styled-components'
import theme from 'assets/theme'

export const HeroBanner = styled('div')({
  width: `100vw`,
  minHeight: `calc(100vh - ${theme.HEADER_HEIGHT} - ${theme.FOOTER_HEIGHT})`,
  background: theme.BRAND_COLOR,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `20px 0`
})

export const Content = styled('div')({
  width: `100%`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 20,
  maxWidth: theme.MEDIUM_VIEW
})

export const Image = styled('img')({
  height: 250,
  width: 250
})
