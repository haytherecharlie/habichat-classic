import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const NeighbourCard = styled('div')({
  minWidth: 75,
  borderRadius: theme.CARD_RADIUS,
  margin: `0 5px`,
  padding: `10px 5px`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderTop: `1px solid #DEDEDE`,
  borderLeft: `1px solid #DEDEDE`,
  borderRight: `1px solid #DEDEDE`,
  boxShadow: `0 2px 5px rgba(0,0,0,0.1)`,
  '&:first-child': {
    marginLeft: 30
  },
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
