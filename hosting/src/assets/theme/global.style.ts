import { createGlobalStyle } from "styled-components"
import theme from "assets/theme"

const GlobalStyle = createGlobalStyle({
  // '@font-face': { 'font-family': 'cocogoose', src: `url(https://firebasestorage.googleapis.com/v0/b/habichat-86de6.appspot.com/o/assets%2Ffonts%2Fcocogoose.otf?alt=media&token=db248d7e-53a2-4b8a-8c32-e78b0f45d945) format("opentype");` },
  body: {
    margin: 0,
    backgroundColor: theme.BACKGROUND_COLOR,
    fontFamily: "Arial, Helvetica, Sans-Serif"
  },
  "#gatsby-focus-wrapper": {
    minHeight: `100vh`,
    display: `flex`,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'stretch'
  },
})

export default GlobalStyle
