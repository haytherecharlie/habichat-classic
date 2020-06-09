import React, { useRef } from 'react'
import postalCodes from 'config/postal-codes.json'
import { db } from 'services/firebase'
import theme from 'ui/assets/theme'
import Text from 'ui/atoms/Text'
import PageLayout from 'ui/layouts/PageLayout'

/**
 * Build community based on letter
 * to ensure that firebase 500 writes limit works.
 */
const BuildCommunity = () => {
  const postalRef = useRef(null)

  const buildCommunities = async () => {
    const batch = db().batch()
    const letterEntries = Object.entries(postalCodes).filter(entry => entry[0].substr(0, 1) === 'Z')
    letterEntries.map(([code, name]) => {
      const communityRef = db().doc(`communities/${code}`)
      const postsRef = db().collection(`communities/${code}/posts`).doc()
      const membersRef = db().collection(`communities/${code}/members`).doc()
      const welcomeMsgRef = db().doc(`messages/1u3gOpZ1Yx4WgEtO6QNZ`)
      const teamHabichatRef = db().doc(`users/1ER6WmvGCGwo9m97cHyZ`)
      batch.set(communityRef, { displayName: name })
      batch.set(postsRef, { active: true, messageRef: welcomeMsgRef })
      batch.set(membersRef, { active: true, userRef: teamHabichatRef })
    })
    await batch.commit()
    return console.log('batch complete!')
  }

  return (
    <div style={{ border: `1px solid ${theme.BRAND_COLOR}`, padding: 10, margin: `5px 0`, flexDirection: 'column' }}>
      <Text size="L" text="build communities" bold unique />
      <input ref={postalRef} />
      <button type="button" onClick={buildCommunities} style={{ background: theme.BRAND_COLOR }}>
        Submit
      </button>
    </div>
  )
}

const Dashboard = () => {
  return (
    <PageLayout page="dashboard" crawl={false}>
      <BuildCommunity />
    </PageLayout>
  )
}

export default Dashboard
