import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TOGGLE_MODAL } from 'services/redux/actions'
import * as S from './Modal.style'

const Modal = ({ body, name }) => {
  const dispatch = useDispatch()
  const { modal, modalSlide } = useSelector((s) => s.app)
  const Slide = body[modalSlide]

  return (
    modal === name && (
      <S.Wrapper>
        <S.Overlay onClick={() => dispatch({ type: TOGGLE_MODAL })} />
        <S.Modal className="animated bounceIn">
          <S.Slider>{<Slide />}</S.Slider>
        </S.Modal>
      </S.Wrapper>
    )
  )
}

export default Modal
