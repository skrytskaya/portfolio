import React from 'react'
import './thanks-modal.scss'

const ThanksModal = ({ modalData }) => {
  return (
    <div
      className="timeline-modal"
      onClick={e => e.stopPropagation()}
    >
      {modalData.description && modalData.description}
    </div>
  )
}

export default ThanksModal
