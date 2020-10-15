import React from 'react'
import { pathOr } from 'ramda'
import { useSelector } from 'react-redux'
import * as S from './Modal.style'

const Modal = ({ children = null, name = null, effect = 'fadeIn' }) => {
  const modal = useSelector(s => pathOr('', ['ui', 'modal'], s))
  return modal === name && <S.Modal effect={effect}>{children}</S.Modal>
}

export default Modal
