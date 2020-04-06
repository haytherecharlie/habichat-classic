import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TOGGLE_MODAL } from 'services/redux/actions'
import ButtonPill from 'atoms/ButtonPill'
import * as S from './Modal.style'

const Modal = ({ body, name, invert, buttonText }) => {
  const dispatch = useDispatch()
  const { modal } = useSelector(s => s.app)

  return (
    <Fragment>
      <ButtonPill invert={invert} onClick={() => dispatch({ type: TOGGLE_MODAL, value: name })}>
        {buttonText}
      </ButtonPill>
      {modal === name && (
        <S.Wrapper>
          <S.Overlay onClick={() => dispatch({ type: TOGGLE_MODAL })} />
          <S.Modal className="animated pulse faster">{body}</S.Modal>
        </S.Wrapper>
      )}
    </Fragment>
  )
}

export default Modal
