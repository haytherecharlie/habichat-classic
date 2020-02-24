const darkMode = false
const SMALL_VIEW = 400
const MEDIUM_VIEW = 700
const LARGE_VIEW = 1000
const ASH = '#333333'
const BLACK = `#111111`
const CHARCOAL = '#222222'
const FOG = '#F8F8F8'
const GRAY = `#CCCCCC`
const DARK_BLUE = '#191D38'
const WHITE = '#FFFFFF'
const SHADOW_DARK = `rgba(0,0,0,0.3)`
const SHADOW_LIGHT = `rgba(0,0,0,0.3)`

export default {
  // Colors
  HIGHLIGHT_COLOR: '#FF2353',
  ACCENT_COLOR: DARK_BLUE,
  BACKGROUND_COLOR: darkMode ? CHARCOAL : WHITE,
  SHADOW_COLOR: darkMode ? SHADOW_DARK : SHADOW_LIGHT,

  PRIMARY_COLOR: darkMode ? WHITE : CHARCOAL,
  SECONDARY_COLOR: darkMode ? DARK_BLUE : `rgba(0, 0, 0, 1)`,
  TWITTER: `#1A91DA`,
  GITHUB: `#562676`,
  LINKEDIN: `#0077B5`,

  // Media Queries
  SMALL_VIEW,
  MEDIUM_VIEW,
  LARGE_VIEW,
  SMALL_QUERY: `@media only screen and (max-width: ${SMALL_VIEW}px)`,
  MEDIUM_QUERY: `@media only screen and (max-width: ${MEDIUM_VIEW}px)`,
  LARGE_QUERY: `@media only screen and (max-width: ${LARGE_VIEW}px)`,

  // Element Sizing
  SPINNER_RADIUS: 40,
  HEADER_HEIGHT: `60px`,

  // Font Attributes
  FONT_NORMAL:
    "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
  FONT_SPECIAL: 'cocogoose',
  FONT_SIZE_SMALL: 12,
  FONT_SIZE_MEDIUM: 14,
  FONT_SIZE_LARGE: 16,
  FONT_WEIGHT_LIGHT: 200,
  FONT_WEIGHT_MEDIUM: 600,
  FONT_WEIGHT_HEAVY: 800,
  SPECIAL_FONT: {
    fontFamily: `cocogoose`,
    letterSpacing: -1
  }
}
