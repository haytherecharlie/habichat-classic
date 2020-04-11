import styled from 'styled-components'
import theme from 'assets/theme'

export const HeroBanner = styled('div')({
  flex: 1,
  width: `100vw`,
  minHeight: `calc(100vh - ${theme.HEADER_HEIGHT} - 100px)`,
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
  height: 200,
  width: 200
})
