import React from 'react'
import './work-item.scss'

const WorkItem = ({ descriptionPosition, description, image }) => {
  return (
    <div className='work-item'>
      {description &&
        <p className={`work-item__description work-item__description-${ descriptionPosition }`}>{description}</p>
      }
      {image &&
        <img className='work-item__image' src={image}></img>
      }
    </div>
  )
}

export default WorkItem
