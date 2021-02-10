import styled from 'styled-components'
import DownArrow from 'react-ionicons/lib/IosArrowDown'
import theme from 'ui/assets/theme'
import colors from 'ui/assets/theme/colors.style'

export const HeroContent = styled('div')({
  flex: 1,
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  padding: 20,
  width: `100%`,
  maxWidth: theme.MEDIUM_VIEW,
  margin: `0 auto`
})

export const Row = styled('div')(({ style }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  ...style
}))

export const Image = styled('img')({
  zIndex: 3,
  height: 200,
  width: 200,
  [`@media only screen and (max-width: ${theme.LARGE_VIEW}px)`]: {
    height: 150,
    width: 150
  }
})

export const BouncingArrow = styled(DownArrow)({
  width: 50,
  height: 50,
  animation: `bounce 1s infinite alternate`,
  '@keyframes bounce': {
    from: {
      transform: `translateY(0px)`
    },
    to: {
      transform: `translateY(-15px)`
    }
  }
})
