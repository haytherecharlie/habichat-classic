import React from 'react'
import * as S from './Helmet.style'

const Helmet = ({ title, path }) => {
  return (
    <S.Helmet titleTemplate="habichat | %s">
      <html lang="en"/>
      <title itemProp="name" lang="en">{title}</title>
      <base target="_blank" href="https://habi.chat/" />
      <meta name="description" content="Chat with your neighbours." />
      <link rel="canonical" href={`https://habi.chat/${path}`} />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </S.Helmet>
  )
}

export default Helmet
