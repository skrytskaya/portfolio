import React from 'react'
import './work-item.scss'

const WorkItem = ({ descriptionPosition, description, image, imageLink }) => {
  return (
    <div className='work-item'>
      {description &&
        <p className={`work-item__description work-item__description-${ descriptionPosition }`}>{description}</p>
      }
      {image &&
        <a href={imageLink} target="_blank"><img className='work-item__image' src={image}></img></a>
      }
    </div>
  )
}

export default WorkItem
