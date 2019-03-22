import React, { lazy, useState, useEffect, Suspense, useContext } from 'react'
import Lottie from 'react-lottie'
import { loading, ICONS } from '../../../utils/const'
import './timeline-modal.scss'
import './flickity.scss'

import Icon from '../../icon'
import { ModalDispatch } from '../../../contexts/modalContext'

const TimelineModal = ({ modalData }) => {
  const modalDispatch = useContext(ModalDispatch)
  const handleModal = () => {
    modalDispatch({ type: 'HIDE_MODAL' })
  }
  const [ FlickityComponent, setFlickityComponent ] = useState(null)
  useEffect(() => {
    const Flickity = lazy(() => import('react-flickity-component'))
    setFlickityComponent(Flickity)
  }, [])
  const renderGallery = () => {
    return modalData.gallery.map((image, i) => {
      return (
        <img style={{ width: '100%' }} key={i} src={image}/>
      )
    })
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <div
      className="timeline-modal"
      onClick={e => e.stopPropagation()}
    >
      <a
        onClick={handleModal}
        className="timeline-modal__button"
      >
        <Icon icon={ICONS.CLOSE1} icon2={ICONS.CLOSE2} size={2.3} />
      </a>
      {modalData.title && <div className="timeline-modal__title"> {modalData.title} </div>}
      { FlickityComponent && modalData.gallery && <Suspense fallback={
        <Lottie options={defaultOptions}
          height={200}
          width={200}
        />
      }>
        <FlickityComponent
          className={'carousel'} // default ''
          elementType={'div'} // default 'div'
          disableImagesLoaded={false} // default false
        >
          { renderGallery() }
        </FlickityComponent></Suspense>
      }
      {modalData.description && <div className="timeline-modal__description"> {modalData.description} </div> }
    </div>
  )
}

export default TimelineModal
