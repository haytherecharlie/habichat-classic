import styled from 'styled-components'
import theme from 'assets/styles/theme.style'

const hStyles = {
  ...theme.SPECIAL_FONT,
  textAlign: 'center'
}

const colorStyles = {
  color: p => (p.color === 'inherit' ? 'inherit' : theme[`${p.color.toUpperCase()}_COLOR`])
}

export const h1 = styled('h1')({
  ...hStyles,
  ...colorStyles
})
export const h2 = styled('h2')({
  ...hStyles,
  ...colorStyles
})
export const h3 = styled('h3')({
  ...hStyles,
  ...colorStyles
})
export const p = styled('p')({
  ...colorStyles
})
export const span = styled('span')({
  ...colorStyles
})
