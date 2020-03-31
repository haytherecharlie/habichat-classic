import React from "react"
import useCaptcha from "utils/hooks/useCaptcha"
import * as S from "./Captcha.style"

const Captcha = () => {
  useCaptcha()

  return <S.Captcha id="captcha" />
}

export default Captcha
