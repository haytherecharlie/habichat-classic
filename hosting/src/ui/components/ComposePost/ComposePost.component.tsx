import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAddReply } from 'api/routes'
import Avatar from 'ui/atoms/Avatar'
import ButtonPill from 'ui/atoms/ButtonPill'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import urlFinder from 'ui/helpers/urlFinder'
import * as S from './ComposePost.style'

const ComposePost = ({ pid, cid, userID, displayName, photoURL }) => {
  const dispatch = useDispatch()
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
    setRows((inputEl.scrollHeight - remainder) / 18)
    setInputTxt(capitalize ? value.substr(0, 1).toUpperCase() : value)
    setCapitalize(false)
  }

  const triggerResize = () => {
    setRows(startingRows)
    setRows((inputRef.current.scrollHeight - remainder) / 18)
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
      onSubmit()
    }
  }

  useEffect(() => {
    setRemainder(inputRef.current.scrollHeight % 10)
    window.addEventListener('resize', triggerResize)
    return () => window.removeEventListener('resize', triggerResize)
  }, [])

  const onSubmit = async () => {
    try {
      const bodyText = inputRef.current.value
      const reply = await fetchAddReply(cid, pid, bodyText, 'text')
      return dispatch({ type: 'REPLY', cid, pid, reply })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <S.ComposePost>
      {/* <S.Pane style={{ width: 50, justifyContent: 'center', paddingTop: 7 }}> */}
      {/* <Avatar src={user.profile.photoURL} alt="Profile Picture" style={{ height: 30, width: 30 }} /> */}
      {/* </S.Pane> */}
      <S.Pane style={{ flex: 1, flexDirection: 'column', marginLeft: 20 }}>
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
          <Link type="button" onClick={onSubmit} style={{ marginTop: 10, marginBottom: 10 }}>
            <ButtonPill>
              <Text size="XS" text="SEND" bold unique style={{ margin: `5px 20px`, letterSpacing: 0 }} />
            </ButtonPill>
          </Link>
        </S.Pane>
      </S.Pane>
    </S.ComposePost>
  )
}

export default ComposePost
