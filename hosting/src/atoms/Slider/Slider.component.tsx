import React, { Fragment, useRef } from 'react'
import * as S from './Slider.style'

const Slider = ({ slides, footer }) => {
  return slides.map((slide, i) => (
    <Fragment>
      <S.Slide>{slide}</S.Slide>
      <S.Footer>{footer[i]}</S.Footer>
    </Fragment>
  ))
}

export default Slider
