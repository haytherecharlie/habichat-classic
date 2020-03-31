import styled from "styled-components"
import theme from "assets/theme"

export const TopLayout = styled("div")({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  background: theme.BACKGROUND_COLOR,
})
