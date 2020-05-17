import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SEO from 'atoms/SEO'
import Text from 'atoms/Text'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ContentLayout from 'layouts/ContentLayout'
import PageLayout from 'layouts/PageLayout'
import theme from 'assets/theme'
import postalCodes from 'config/postal-codes.json'
import asyncLoadCommunity from 'services/firebase/api/loadCommunity'

/**
 * Build community based on letter
 * to ensure that firebase 500 writes limit works.
 */
// const BuildCommunity = () => {
//   const postalRef = useRef(null)

//   const buildCommunities = async () => {
//     const batch = db().batch()
//     const letterEntries = Object.entries(postalCodes).filter(entry => entry[0].substr(0, 1) === 'Z')
//     letterEntries.map(([code, name]) => {
//       const communityRef = db().doc(`communities/${code}`)
//       const postsRef = db().collection(`communities/${code}/posts`).doc()
//       const membersRef = db().collection(`communities/${code}/members`).doc()
//       const welcomeMsgRef = db().doc(`messages/1u3gOpZ1Yx4WgEtO6QNZ`)
//       const teamHabichatRef = db().doc(`users/1ER6WmvGCGwo9m97cHyZ`)
//       batch.set(communityRef, { displayName: name })
//       batch.set(postsRef, { active: true, messageRef: welcomeMsgRef })
//       batch.set(membersRef, { active: true, userRef: teamHabichatRef })
//     })
//     await batch.commit()
//     return console.log('batch complete!')
//   }

//   return (
//     <div style={{ border: `1px solid ${theme.BRAND_COLOR}`, padding: 10, margin: `5px 0`, flexDirection: 'column' }}>
//       <Text size="L" text="build communities" bold unique />
//       <input ref={postalRef} />
//       <button type="button" onClick={buildCommunities} style={{ background: theme.BRAND_COLOR }}>
//         Submit
//       </button>
//     </div>
//   )
// }

/**
 * Search Config for postal codes and then get community from database
 */
const SearchPostalCodes = () => {
  const postalRef = useRef(null)
  const dispatch = useDispatch()

  const searchPostalCode = async () => {
    try {
      const postalCode = postalRef.current.value.substr(0, 3).toUpperCase()
      if (!postalCodes[postalCode]) throw new Error('invalid postal code')
      const data = await asyncLoadCommunity(postalCode)
      dispatch({ type: 'INIT_COMMUNITY', ...data })
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div style={{ border: `1px solid ${theme.BRAND_COLOR}`, padding: 10, margin: `5px 0`, flexDirection: 'column' }}>
      <Text size="L" text="postal code" bold unique />
      <input ref={postalRef} defaultValue="H4E" />
      <button type="button" onClick={searchPostalCode} style={{ background: theme.BRAND_COLOR }}>
        Submit
      </button>
    </div>
  )
}

const CommunityPosts = () => {
  const { app, community, members, posts } = useSelector(s => s)
  return app.status === 'success' ? (
    <div style={{ border: `1px solid ${theme.BRAND_COLOR}`, padding: 10, margin: `5px 0`, flexDirection: 'column' }}>
      <Text size="XL" text={community.displayName} bold unique />
      {Object.entries(posts).map(([id, post]) => (
        <div key={id} style={{ border: `1px solid ${theme.BRAND_COLOR}`, padding: 10, margin: `5px 0`, flexDirection: 'column' }}>
          <Text size="M" text={members[post.userID].displayName} unique/>
          <img src={members[post.userID].photoURL} width="50" height="50" alt="display profile"/>
          <Text size="M" text={post.bodyText} unique/>
        </div>
      ))}
    </div>
  ) : null
}

const Dashboard = () => {
  return (
    <PageLayout>
      <SEO page="privacy" crawl={true} />
      <Header />
      <ContentLayout.Padding style={{ paddingTop: 20, paddingBottom: 20 }}>
        {/* <BuildCommunity /> */}
        <SearchPostalCodes />
        <CommunityPosts />
      </ContentLayout.Padding>
      <Footer />
    </PageLayout>
  )
}

export default Dashboard
