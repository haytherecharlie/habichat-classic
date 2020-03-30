import styled from 'styled-components'

export const PhoneInput = styled('div')({
  width: `100%`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  '.container': {
    height: 40,
    width: `100%`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'stretch'
  },
  '.input': {
    flex: 1,
    fontWeight: 400,
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    color: p => (p.darkMode ? `#FFF` : `#000`),
    borderRadius: 25,
    padding: `0% 25px`,
    background: `rgba(96,57,169, 0.1)`,
    border: `1px solid #6039A9`
  }
})

export const PhoneLabel = styled('div')({
  marginLeft: 20,
  fontFamily: 'cocogoose',
  color: p => (p.darkMode ? '#FFF' : '#000'),
  fontSize: 14,
  textTransform: 'uppercase'
})
