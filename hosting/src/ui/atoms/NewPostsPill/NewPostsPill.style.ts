import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  animation: `bounceIn`,
  animationDuration: `.5s`,
  margin: '10px auto',
  width: 150
})
