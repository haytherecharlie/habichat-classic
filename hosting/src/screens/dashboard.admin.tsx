import React, { useRef } from 'react'
import SEO from 'atoms/SEO'
import Text from 'atoms/Text'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ContentLayout from 'layouts/ContentLayout'
import PageLayout from 'layouts/PageLayout'
import theme from 'assets/theme'
import { db } from 'services/firebase'
import postalCodes from 'config/postal-codes.json'
import { asyncCollectionToDocs } from 'utils/helpers'

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

  const searchPostalCode = async () => {
    try {
      const code = postalRef.current.value.substr(0, 3).toUpperCase()
      if (!postalCodes[code]) throw new Error('invalid postal code')
      const getCommunityDoc = db().doc(`communities/${code}`)
      const getMembersCollection = db().collection(`communities/${code}/members`).limit(50)
      const getPostsCollection = db().collection(`communities/${code}/posts`).limit(50)
      const [communityDoc, membersCollection, postsCollection] = await Promise.all([getCommunityDoc.get(), getMembersCollection.get(), getPostsCollection.get()])
      const community = communityDoc.data()
      const members = await asyncCollectionToDocs(membersCollection, 'userRef')
      const posts = await asyncCollectionToDocs(postsCollection, 'messageRef')

      console.log('community: ', {
        ...community, 
        members, 
        posts
      })
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div style={{ border: `1px solid ${theme.BRAND_COLOR}`, padding: 10, margin: `5px 0`, flexDirection: 'column' }}>
      <Text size="L" text="postal code" bold unique />
      <input ref={postalRef} defaultValue="H4E"/>
      <button type="button" onClick={searchPostalCode} style={{ background: theme.BRAND_COLOR }}>
        Submit
      </button>
    </div>
  )
}

const Dashboard = () => {
  return (
    <PageLayout>
      <SEO page="privacy" crawl={true} />
      <Header />
      <ContentLayout.Padding style={{ paddingTop: 20, paddingBottom: 20 }}>
        {/* <BuildCommunity /> */}
        <SearchPostalCodes />
      </ContentLayout.Padding>
      <Footer />
    </PageLayout>
  )
}

export default Dashboard
