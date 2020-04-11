import styled from 'styled-components'
import theme from 'assets/theme'

export const HeroBanner = styled('div')({
  flex: 1,
  width: `100vw`,
  minHeight: `calc(100vh - ${theme.HEADER_HEIGHT} - 100px)`,
  background: theme.BACKGROUND_COLOR,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative'
})

export const Content = styled('div')({
  zIndex: 2,
  width: `100%`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 20,
  maxWidth: theme.MEDIUM_VIEW
})

export const Image = styled('img')({
  zIndex: 3,
  height: 200,
  width: 200
})

export const Video = styled('video')({
  zIndex: 1,
  position: 'absolute',
  height: `calc(100vh - 160px)`,
  width: `100vw`,
  objectFit: 'cover',
  top: 0, 
  left: 0
})
