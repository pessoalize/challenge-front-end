import styled from 'styled-components'
import ReactModal from 'react-modal'

export const Container = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  min-height: 12rem;
  width: 40rem;
  max-width: 100%;
  max-height: 100%;
  padding: 2.5rem 2rem;
  overflow: auto;
  background: var(--white);
  border-radius: .25rem;
`