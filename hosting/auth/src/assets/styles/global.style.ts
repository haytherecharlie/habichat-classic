import { createGlobalStyle } from 'styled-components'
import cocogoose from '../fonts/cocogoose.otf'

const GlobalStyle = createGlobalStyle({
  '@font-face': { 'font-family': 'cocogoose', src: `local('${cocogoose}'), url(/cocogoose.otf) format("opentype");` },
  body: {
    margin: 0,
    background: p => (p.darkMode ? '#000A18' : `#EFF3F8`)
  },
  '#gatsby-focus-wrapper': {
    height: `100vh`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'stretch'
  }
})

export default GlobalStyle
