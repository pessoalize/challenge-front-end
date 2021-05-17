import { createContext, ReactNode, useContext, useState } from "react";
import { Modal } from "../components/Modal";

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
      <Modal isOpen={isOpen}>
        {content}
      </Modal>
    </ModalContext.Provider>
  )
}

export function useModal() {
  return useContext(ModalContext)
}