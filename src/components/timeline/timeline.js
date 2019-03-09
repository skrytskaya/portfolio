import React from 'react'
import './timeline.scss'

import TimelineItem from './timeline-item/timeline-item'

const Timeline = ({ timelineData }) => {
  const renderTimeline = () => {
    return timelineData.map((eachData, i) => {
      return <TimelineItem key={i} {...eachData}/>
    })
  }
  return (
    <div className='timeline wrapper'>
      {renderTimeline()}
    </div>
  )
}

export default Timeline
