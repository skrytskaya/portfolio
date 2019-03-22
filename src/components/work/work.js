import React from 'react'
import './work.scss'

import WorkItem from './work-item/work-item'

const Work = ({ workData }) => {
  const renderWork = () => {
    return workData.map((eachData, i) => {
      return <WorkItem key={i} {...eachData}/>
    })
  }
  return (
    <div className='work wrapper'>
      {renderWork()}
    </div>
  )
}

export default Work
