import React from 'react'
import Header from 'components/Header'

const useHeaderOptions = type => {
  switch (type) {
    case 'register':
      return { header: () => <Header.Register /> }
    default:
      return { headerShown: false }
  }
}

export default useHeaderOptions
