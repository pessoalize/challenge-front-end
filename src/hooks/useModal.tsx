import { createContext, ReactNode, useContext, useState } from "react";
import ReactModal from 'react-modal'

type ModalContextData = {
  openModal(modalContent: ReactNode): void
  closeModal(): void
}

interface ModalProviderProps {
  children: ReactNode
}

const ModalContext = createContext({} as ModalContextData)

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<ReactNode>(null)

  function openModal(modalContent: ReactNode) {
    setContent(modalContent)
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ReactModal
        isOpen={isOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
      >
        {content}
      </ReactModal>
    </ModalContext.Provider>
  )
}

export function useModal() {
  return useContext(ModalContext)
}