import React, { useContext, useEffect } from 'react'
import './progress-bar.scss'
import {
  ScrollProgressData,
  ScrollProgressDispatch
} from '../../contexts/scrollProgressContext'

const ProgressBar = ({ progress, scrollContainerRef }) => {
  const scrollProgressDispatch = useContext(ScrollProgressDispatch)
  const scrollProgressData = useContext(ScrollProgressData)

  const onScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current
    const a = scrollTop
    const b = scrollHeight - clientHeight
    const c = a / b

    scrollProgressDispatch({ type: 'SET_SCROLL_PROGRESS', payload: c * 100 })
  }

  useEffect(() => {
    scrollContainerRef.current.addEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="progress-bar-container">
      <div style={{ width: `${ scrollProgressData }%` }} className="progress-bar"></div>
    </div>
  )
}

export default ProgressBar
