import React, { useEffect } from 'react'
import { auth } from 'services/firebase'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import PageLayout from 'ui/layouts/PageLayout'

const Auth = () => {
  if (auth().isSignInWithEmailLink(window.location.href)) {
    auth()
      .signInWithEmailLink('charlie.hay@outlook.com', window.location.href)
      .then(function (result) {
        console.log('result', result)
      })
      .catch(function (error) {
        console.log('error', error)
      })
  }
  return (
    <PageLayout page="404" crawl={false} style={{ alignItems: 'center', justifyContent: 'center' }}>
      <button
        onClick={() =>
          auth()
            .fetchSignInMethodsForEmail('charlie.hay@outlook.com')
            .then(res => console.log(res))
            .catch(err => console.error(err))
        }>
        Check charlie.hay@outlook.com
      </button>

      <button
        onClick={() =>
          auth().sendSignInLinkToEmail('charlie.hay@outlook.com', {
            url: 'http://localhost:8000/auth',
            handleCodeInApp: true
          })
        }>
        Register charlie.hay@outlook.com
      </button>
      {/* <img src="/image/spilt-milk.png" style={{ width: `80%`, maxWidth: 400, margin: '0 auto' }} alt="spilt milk" />
      <Text size="M" text="Oops! We all make mistakes..." style={{ textAlign: 'center', marginTop: 10 }} bold unique />
      <Text size="M" text="Page not found!" style={{ textAlign: 'center' }} bold unique />
      <Link href="/">
        <Text size="S" text="Return to homepage" style={{ marginTop: 10, textAlign: 'center' }} unique />
      </Link> */}
    </PageLayout>
  )
}

export default Auth
