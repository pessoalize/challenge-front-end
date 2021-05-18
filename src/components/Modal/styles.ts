import styled from 'styled-components'
import ReactModal from 'react-modal'

export const Container = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  min-height: 15rem;
  width: 40rem;
  max-width: 100%;
  max-height: 100%;
  padding: 3rem;
  overflow: auto;
  background: var(--white);
  border-radius: .25rem;
`