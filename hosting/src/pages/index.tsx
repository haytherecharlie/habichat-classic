import React from "react"
import Helmet from "components/Helmet"
import CenterLayout from "layouts/CenterLayout"

const Index = () => {
  return (
    <CenterLayout>
      <Helmet title="Home" path="home" />
    </CenterLayout>
  )
}

export default Index
