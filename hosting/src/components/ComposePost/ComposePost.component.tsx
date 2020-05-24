import React, { useEffect, useRef, useState } from 'react'
import Avatar from 'atoms/Avatar'
import ButtonPill from 'atoms/ButtonPill'
import Link from 'atoms/Link'
import Text from 'atoms/Text'
import * as S from './ComposePost.style'

const ComposePost = ({ user }) => {
  const textMaxLength = 750
  const startingRows = 1
  const inputRef = useRef(null)
  const [inputTxt, setInputTxt] = useState('')
  const [remainder, setRemainder] = useState(0)
  const [capitalize, setCapitalize] = useState(true)
  const [charCount, setCharCount] = useState(textMaxLength)
  const [rows, setRows] = useState(startingRows)

  const onChange = e => {
    const inputEl = inputRef.current
    const value = inputEl.value.replace(/(\r\n|\n|\r)/gm, '')
    setCharCount(textMaxLength - value.length)
    setRows((inputEl.scrollHeight - remainder) / 20)
    setInputTxt(capitalize ? value.substr(0, 1).toUpperCase() : value)
    setCapitalize(false)
  }

  const triggerResize = () => {
    setRows(startingRows)
    setRows((inputRef.current.scrollHeight - remainder) / 20)
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') e.preventDefault()
  }

  useEffect(() => {
    setRemainder(inputRef.current.scrollHeight % 10)
    window.addEventListener('resize', triggerResize)
    return () => window.removeEventListener('resize', triggerResize)
  }, [])

  return (
    <S.ComposePost>
      <S.Pane style={{ width: 50, justifyContent: 'center', paddingTop: 7 }}>
        <Avatar src={user.profile.photoURL} alt="Profile Picture" style={{ height: 30, width: 30 }} />
      </S.Pane>
      <S.Pane style={{ flex: 1, flexDirection: 'column' }}>
        <S.TextArea>
          <S.Input
            ref={inputRef}
            placeholder="Write a reply..."
            rows={rows}
            wrap="hard"
            maxLength={textMaxLength}
            value={inputTxt}
            onChange={onChange}
            onKeyDown={handleKeyDown}
          />
        </S.TextArea>
        <S.Pane style={{ flex: 1, justifyContent: `flex-end` }}>
          <Link type="button" onClick={() => {}} style={{ marginTop: 10, marginBottom: 10 }}>
            <ButtonPill>
              <Text size="XS" text="SEND" bold unique style={{ letterSpacing: 0 }} />
            </ButtonPill>
          </Link>
        </S.Pane>
      </S.Pane>
    </S.ComposePost>
  )
}

export default ComposePost
