import React from 'react'
import * as S from './Helmet.style'

const Helmet = ({ title, path }) => {
  return (
    <S.Helmet titleTemplate="habichat | %s">
      <html lang="en" amp />
      <title itemProp="name" lang="en">{title}</title>
      <base target="_blank" href="https://habi.chat/" />
      <meta name="description" content="Chat with your neighbours." />
      <link rel="canonical" href={`https://habi.chat/${path}`} />

      <link rel="apple-touch-icon" href="https://habi.chat/img/apple-touch-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="https://habi.chat/img/apple-touch-icon-72x72.png" />
      
      <meta property="og:type" content="website" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </S.Helmet>
  )
}

export default Helmet
