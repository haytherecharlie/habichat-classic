import styled from "styled-components"
import theme from "assets/theme"

export const CenterLayout = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: theme.BACKGROUND_COLOR,
})
