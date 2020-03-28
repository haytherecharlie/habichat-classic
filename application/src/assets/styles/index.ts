import { Appearance } from 'react-native-appearance'
import C from './colors.style'
const DARK_MODE = Appearance.getColorScheme() === 'dark'

const SMALL_VIEW = 400
const MEDIUM_VIEW = 700
const LARGE_VIEW = 924

// https://coolors.co/11151c-212d40-364156-7d4e57-d66853
const FONT_LIGHT = 200
const FONT_REGULAR = 600
const FONT_HEAVY = 800

const HELVETICA = 'helvetica'
const COCOGOOSE = 'cocogoose'

export default {
  // Dark Mode
  DARK_MODE: DARK_MODE,

  // Colors
  BACKGROUND_COLOR: DARK_MODE ? C.DARK_BACKGROUND : C.LIGHT_BACKGROUND,
  FOREGROUND_COLOR: DARK_MODE ? C.DARK_FOREGROUND : C.LIGHT_FOREGROUND,
  PRIMARY_COLOR: DARK_MODE ? C.DARK_PRIMARY : C.LIGHT_PRIMARY,
  INVERSE_COLOR: DARK_MODE ? C.DARK_INVERSE : C.LIGHT_INVERSE,
  BRAND_COLOR: C.BRAND_COLOR,
  OPAQUE_BRAND: C.OPAQUE_BRAND,
  VALID_GREEN: C.VALID_GREEN,
  INVALID_RED: C.INVALID_RED,
  TWITTER_COLOR: C.TWITTER_COLOR,
  GITHUB_COLOR: C.GITHUB_COLOR,
  LINKEDIN_COLOR: C.LINKEDIN_COLOR,

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
  }
}
