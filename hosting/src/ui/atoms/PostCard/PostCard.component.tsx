import React from 'react'
import { formatDistance } from 'date-fns'
import { navigate } from 'gatsby'
import CheckMark from 'react-ionicons/lib/MdCheckmark'
import CheckMarks from 'react-ionicons/lib/MdDoneAll'
import Reply from 'react-ionicons/lib/IosRedo'
import ChatBubbles from 'react-ionicons/lib/MdChatbubbles'
import theme from 'ui/assets/theme'
import Avatar from 'ui/atoms/Avatar'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import * as S from './PostCard.style'

const PostCard = ({ post }) => {
  let downclick = 0
  const {
    author: { displayName = '', photoURL = '' },
    replies = '',
    text = '',
    updatedAt = { seconds: 0 },
    server = false
  } = post

  const handleButtonPress = () => (downclick = new Date().getTime())
  const handleButtonRelease = () => (new Date().getTime() - downclick < 200 ? navigate(`/post/${post.id}`) : null)
  const formatTimestamp = time => {
    return typeof time === 'object'
      ? formatDistance(
          new Date(time.hasOwnProperty('_seconds') ? time._seconds * 1000 : time.seconds * 1000),
          new Date().getTime(),
          { addSuffix: true }
        )
      : 'just now'
  }

  return (
    <S.PostCard role="article" data-focusable="true">
      <S.LeftCard>
        <Avatar src={photoURL} alt="display profile" style={{ height: 35, width: 35, margin: `8px 0 0 -20px` }} />
      </S.LeftCard>
      <S.RightCard>
        <S.Col>
          <S.Col
            onTouchStart={handleButtonPress}
            onTouchEnd={handleButtonRelease}
            onMouseDown={handleButtonPress}
            onMouseUp={handleButtonRelease}>
            <S.Row>
              <S.Col>
                <Text size="S" text={displayName} bold unique />
              </S.Col>
              <S.Col style={{ flex: 0, minWidth: 115, alignItems: 'flex-end' }}>
                <Text size="XS" text={formatTimestamp(updatedAt)} unique />
              </S.Col>
            </S.Row>
            <S.Row>
              <table style={{ tableLayout: 'fixed', width: '100%', wordWrap: 'break-word' }}>
                <tbody>
                  <tr>
                    <td>
                      <Text size="S" text={text} style={{ margin: '5px 0 7px 0', fontWeight: 300 }} unique />
                    </td>
                  </tr>
                </tbody>
              </table>
            </S.Row>
          </S.Col>
          <S.Row style={{ marginTop: 0 }}>
            <S.Col style={{ flex: 0 }}>
              <S.CommentButton>
                <Link type="button" onClick={() => console.log('WOWO')}>
                  <ChatBubbles fontSize={`${theme.FONT_S}px`} color={theme.BRAND_COLOR} />
                  <Text
                    size="XS"
                    text={`${replies} Comments`}
                    style={{ marginLeft: 3, color: theme.BRAND_COLOR, fontWeight: 600 }}
                    unique
                  />
                </Link>
              </S.CommentButton>
            </S.Col>
            <S.Col style={{ flex: 0 }}>
              <S.CommentButton>
                <Link type="button" onClick={() => console.log('WOWO')}>
                  <Reply fontSize={`${theme.FONT_M}px`} color={theme.BRAND_COLOR} />
                  <Text
                    size="XS"
                    text="Write Reply"
                    style={{ marginLeft: 3, color: theme.BRAND_COLOR, fontWeight: 600 }}
                    unique
                  />
                </Link>
              </S.CommentButton>
            </S.Col>
            <S.Col>
              <S.ServerCheck>
                {server ? (
                  <CheckMarks fontSize="12px" color={theme.BRAND_COLOR} />
                ) : (
                  <CheckMark fontSize="12px" color={theme.BRAND_COLOR} />
                )}
              </S.ServerCheck>
            </S.Col>
          </S.Row>
        </S.Col>
      </S.RightCard>
    </S.PostCard>
  )
}

export default PostCard
