import React, { useRef, useEffect } from 'react'
import PostCard from 'ui/atoms/PostCard'
import ReplyCard from 'ui/atoms/ReplyCard'
import useReplies from 'ui/hooks/useReplies'
import Avatar from 'ui/atoms/Avatar'
import Text from 'ui/atoms/Text'
import Link from 'ui/atoms/Link'
import AppLayout from 'ui/layouts/AppLayout'
import theme from 'ui/assets/theme'

const Replies = ({ cid, pid }) => {
  return (
    <AppLayout page="community" crawl={false} style={{ marginTop: 10 }}>
      <Link type="internal" href="/H4E">
        <Text size="S" text="< Back to community" style={{ marginBottom: 15 }} bold unique />
      </Link>
      <div
        style={{
          width: `100%`,
          background: theme.CLEAN_BACKGROUND,
          padding: 20,
          borderRadius: theme.CARD_RADIUS,
          boxShadow: `0 2px 2px rgba(0,0,0,0.2)`,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'stretch'
        }}>
        <div style={{ height: `100%`, flex: `0 0 30px` }}>
          <Avatar src="/avatars/will_smith.jpeg" style={{ height: 35, width: 35 }} alt="will" />
        </div>
        <div style={{ marginLeft: 10, display: 'flex', flexDirection: 'column' }}>
          <Text size="S" text="Will Smith" bold unique />
          <Text size="S" text="Guys I'm loosing my mind with the COVID thing, is there something we can do?" unique />
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          marginLeft: 20
        }}>
        <div style={{ flex: 1, display: 'flex', margin: `10px 0px`, alignItems: 'stretch', justifyContent: 'stretch' }}>
          <div style={{ height: `100%`, flex: `0 0 30px`, paddingTop: 10 }}>
            <Avatar src="/avatars/jennifer_lopez.jpeg" style={{ height: 35, width: 35 }} alt="will" />
          </div>
          <div style={{ flex: 1, marginLeft: 10, display: 'flex', flexDirection: 'column', paddingRight: 20 }}>
            <table style={{ tableLayout: 'fixed', width: '100%', wordWrap: 'break-word' }}>
              <tbody>
                <tr>
                  <td>
                    <Text size="S" text="Jennifer Lopez" bold unique />
                    <Text
                      size="S"
                      text="I like to think the solutions to all my problems is to put on a good Mark Anthony album and just dance!"
                      unique
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* {post && <PostCard key={pid} post={{ ...post, pid, cid }} hideButtons />}
      {replies && Object.entries(replies).map(([key, reply]) => <ReplyCard key={key} reply={reply} />)} */}
    </AppLayout>
  )
}

export default Replies
