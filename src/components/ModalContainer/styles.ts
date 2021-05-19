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

export const CloseButton = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  right: 0;
  top: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  margin: 2rem;
`