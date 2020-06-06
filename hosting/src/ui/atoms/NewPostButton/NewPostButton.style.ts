import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const NewPostButton = styled('div')({
  cursor: 'pointer',
  position: 'absolute',
  background: theme.BRAND_COLOR,
  borderRadius: `50%`,
  top: -100,
  right: 0,
  padding: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    animation: `pulse`,
    animationDuration: `1s`
  }
})
