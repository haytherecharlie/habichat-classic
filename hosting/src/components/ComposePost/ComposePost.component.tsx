import React, { useEffect, useRef, useState } from 'react'
import Avatar from 'atoms/Avatar'
import ButtonPill from 'atoms/ButtonPill'
import Link from 'atoms/Link'
import Text from 'atoms/Text'
import * as S from './ComposePost.style'

const ComposePost = ({ user }) => {
  const textMaxLength = 750
  const inputRef = useRef(null)
  const [inputTxt, setInputTxt] = useState('')
  const [remainder, setRemainder] = useState(0)
  const [charCount, setCharCount] = useState(textMaxLength)
  const [rows, setRows] = useState(2)

  const limitReturns = () => {
    const inputEl = inputRef.current
    setCharCount(textMaxLength - inputEl.value.length)
    setRows((inputEl.scrollHeight - remainder) / 20)
    setInputTxt(inputEl.value.replace(/(\r\n|\n|\r)/gm, ''))
  }

  const triggerResize = () => {
    setRows(2)
    setRows((inputRef.current.scrollHeight - remainder) / 20)
  }

  useEffect(() => {
    setRemainder(inputRef.current.scrollHeight % 10)
    window.addEventListener('resize', triggerResize)
    return () => window.removeEventListener('resize', triggerResize)
  }, [])

  return (
    <S.ComposePost>
      <S.Pane style={{ width: 50 }}>
        <Avatar src={user.profile.photoURL} alt="Profile Picture" />
      </S.Pane>
      <S.Pane style={{ flex: 1, flexDirection: 'column' }}>
        <S.TextArea>
          <S.Input
            ref={inputRef}
            placeholder="Share something..."
            cols="20"
            rows={rows}
            wrap="hard"
            maxLength={textMaxLength}
            value={inputTxt}
            onChange={limitReturns}
          />
        </S.TextArea>
        <S.Pane style={{ flex: 1, justifyContent: `flex-end` }}>
          <Link type="button" onClick={() => {}} style={{ marginTop: 10 }}>
            <ButtonPill>
              <Text size="XS" text="Submit" bold unique style={{ letterSpacing: 0 }} />
            </ButtonPill>
          </Link>
        </S.Pane>
      </S.Pane>
    </S.ComposePost>
  )
}

export default ComposePost
