import React, { useContext } from 'react'
import './timeline-item.scss'
import { ModalDispatch } from '../../../contexts/modalContext'
import TimelineModal from '../../modal/timeline-modal/timeline-modal'

const TimelineItem = ({ title, subtitle, description, containerPosition, modal }) => {
  const modalDispatch = useContext(ModalDispatch)
  const handleModal = () => {
    modalDispatch({ type: 'SET_MODAL', payload: { isActive: true, ModalComponent: TimelineModal, modalData: modal } })
  }

  return (
    <div
      className={`
        timeline-container 
        timeline-container--${ containerPosition }
      `}
      onClick={handleModal}
    >
      <div className="timeline-heading">
        {title && <p>{title}</p>}
        {subtitle && <p>{subtitle}</p>}
        {description && <p>{description}</p>}
      </div>
    </div>
  )
}

export default TimelineItem
