import { ReactNode } from 'react'
import { useModal } from '../../hooks/useModal'
import { Container, CloseButton } from './styles'
import { FiX } from 'react-icons/fi'

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
}

export function ModalContainer({ children, isOpen }: ModalProps) {
  const { closeModal } = useModal()
  return (
    <Container
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: 'var(--alphaGray-900)'
        }
      }}
    >
      <CloseButton onClick={closeModal}>
        <FiX />
      </CloseButton>
      {children}
    </Container>
  )
}