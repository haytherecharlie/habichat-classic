import React from "react"
import Text from "atoms/Text"
import Habichat from "atoms/Habichat"
import Helmet from "components/Helmet"
import CenterLayout from "layouts/CenterLayout"

const Index = () => {
  return (
    <CenterLayout>
      <Helmet title="Home" path="home" />
      {/* <Habichat /> */}
      <Text size="h3">-Connect with your Neighbours-</Text>
    </CenterLayout>
  )
}

export default Index
