import React from 'react'
import ReactHelmet from 'react-helmet'
import theme from 'assets/styles/theme.style'

const Helmet = ({ title }) => {
  return (
    <ReactHelmet defer={false}>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="habichat" />
      <meta name="apple-mobile-web-app-status-bar-style" content={theme.PRIMARY_COLOR} />
      <link rel="apple-touch-icon" href="/icons/icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="/icons/icon-192x192.png" />
    </ReactHelmet>
  )
}

export default Helmet
