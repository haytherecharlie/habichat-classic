import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const NeighbourCard = styled('div')({
  minWidth: 55,
  borderRadius: theme.CARD_RADIUS,
  margin: `0 5px`,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '&:last-child:before': {
    content: '""',
    position: 'relative',
    display: `block`,
    height: `1px`,
    width: `10px`,
    right: `calc(-50% - 12px)`,
    top: -10
  }
})
