import styled from 'styled-components'
import theme from 'ui/assets/theme'
import colors from 'ui/assets/theme/colors.style'

export const HeroBanner = styled('div')({
  minHeight: 'calc(100vh - 120px)',
  background: colors.DARK_BACKGROUND,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'stretch',
  alignItems: 'stretch',
  position: 'relative',
  overflow: 'hidden'
})

export const Video = styled('video')({
  zIndex: 1,
  height: `100%`,
  width: `100%`,
  position: 'absolute',
  objectFit: 'cover',
  top: 0,
  left: 0,
  filter: `blur(5px)`
})
