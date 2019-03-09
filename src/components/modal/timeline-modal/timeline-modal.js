import React, { lazy, useState, useEffect, Suspense } from 'react'
import './timeline-modal.scss'
import './flickity.css'

const TimelineModal = ({ modalData }) => {
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
  return (
    <div
      className="timeline-modal"
      onClick={e => e.stopPropagation()}
    >
      {modalData.description && modalData.description}
      { FlickityComponent && modalData.gallery && <Suspense fallback={<div>Loading...</div>}><FlickityComponent
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        disableImagesLoaded={false} // default false
      >
        { renderGallery() }
      </FlickityComponent></Suspense>
      }
    </div>
  )
}

export default TimelineModal
