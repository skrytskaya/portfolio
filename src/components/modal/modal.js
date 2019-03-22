import React, { useContext } from 'react'
import './modal.scss'
import { ModalData, ModalDispatch } from '../../contexts/modalContext'

const Modal = () => {
  const { isActive, ModalComponent, modalData } = useContext(ModalData)
  const modalDispatch = useContext(ModalDispatch)
  const handleModal = () => {
    modalDispatch({ type: 'HIDE_MODAL' })
  }
  if (isActive && ModalComponent) {
    return (
      <div
        className="dark-overlay"
        onClick={handleModal}
      >
        <ModalComponent modalData={modalData} />
      </div>
    )
  }
  return null
}

export default Modal
