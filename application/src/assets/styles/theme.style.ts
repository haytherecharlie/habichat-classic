const darkMode = false

const SMALL_VIEW = 400
const MEDIUM_VIEW = 700
const LARGE_VIEW = 924

const F8 = '#F8F8F8'
const BLACK = '#000000'
const WHITE = '#FFFFFF'
const BLACKISH = '#444444'
const PINK = '#FF2353'
const TWITTER = `#1A91DA`
const GITHUB = `#562676`
const LINKEDIN = `#0077B5`
const SHADOW_DARK = `rgba(0,0,0,0.3)`
const SHADOW_LIGHT = `rgba(0,0,0,0.3)`
const HABICHAT = '#191D38'

const FONT_LIGHT = 200
const FONT_REGULAR = 600
const FONT_HEAVY = 800

const HELVETICA =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'"
const COCOGOOSE = 'cocogoose'

export default {
  // Colors
  DARK_MODE: darkMode,
  SHADOW_COLOR: darkMode ? SHADOW_DARK : SHADOW_LIGHT,
  BACKGROUND_COLOR: darkMode ? BLACKISH : F8,
  FOREGROUND_COLOR: darkMode ? BLACK : WHITE,
  PRIMARY_COLOR: darkMode ? WHITE : BLACK,
  INVERSE_COLOR: darkMode ? BLACK : WHITE,
  VALID_GREEN: '#23DC3D',
  INVALID_RED: 'red',
  DISPLAY_PADDING: 20,
  BRAND_COLOR: HABICHAT,
  TWITTER,
  GITHUB,
  LINKEDIN,

  // Media Queries
  SMALL_VIEW,
  MEDIUM_VIEW,
  LARGE_VIEW,
  SMALL_QUERY: `@media only screen and (max-width: ${SMALL_VIEW}px)`,
  MEDIUM_QUERY: `@media only screen and (max-width: ${MEDIUM_VIEW}px)`,
  LARGE_QUERY: `@media only screen and (max-width: ${LARGE_VIEW}px)`,

  // Element Sizing
  BORDER_RADIUS: 25,
  SPINNER_RADIUS: 40,
  HEADER_HEIGHT: `60px`,

  // Font Family
  FONT_BODY: HELVETICA,
  FONT_TITLE: COCOGOOSE,

  // Font Size
  FONT_SMALL: 12,
  FONT_MEDIUM: 14,
  FONT_LARGE: 16,

  // Font Weight
  FONT_LIGHT,
  FONT_REGULAR,
  FONT_HEAVY,

  SPECIAL_FONT: {
    fontFamily: COCOGOOSE,
    letterSpacing: -1
  },

  HOVER_TEXT: {
    '&:hover': {
      transition: 'font-weight .2s',
      fontWeight: FONT_HEAVY
    }
  },

  FOCUS_OUTLINE: {
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${PINK} inset`
    }
  }
}
