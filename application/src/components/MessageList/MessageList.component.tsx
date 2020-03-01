import React, { useEffect, useRef } from 'react'
import { ScrollView } from 'react-native'
// import useDatabaseListener from 'utils/hooks/useDatabaseListener'
import MessageBox from 'atoms/MessageBox'
import { useSelector } from 'react-redux'
import * as S from './MessageList.style'

const MessagesList = () => {
  // useDatabaseListener('messages')
  const listRef = useRef(null)
  const { keyboardUp } = useSelector(s => s.application)
  const messages = useSelector(s => s.messages)
  const members = useSelector(s => s.members)

  useEffect(() => {
    listRef.current.scrollToEnd({ animated: true })
  }, [keyboardUp])

  return (
    <S.MessageList>
      {!keyboardUp && <S.Title>Community Posts</S.Title>}
      <ScrollView ref={listRef} bounces={true} snapToEnd={true} showsVerticalScrollIndicator={false}>
        {messages.map(m => (
          <MessageBox key={m.id} message={m} member={members.find(x => x.id === m.author)} listRef={listRef} />
        ))}
      </ScrollView>
    </S.MessageList>
  )
}

export default MessagesList
