import React, { useEffect, useRef } from 'react'

export const useScrollElement = (elementRef, scrollContainerRef, extraArgs) => {
  let className = 'hidden'
  if (extraArgs && extraArgs.className) className = extraArgs.className
  let pastScroll
  const onScroll = () => {
    let currentScrollPos = scrollContainerRef.current.scrollTop
    let scrollDiff
    if (typeof pastScroll === 'number') scrollDiff = currentScrollPos - pastScroll
    if (scrollDiff > 0) elementRef.current.classList.add(className)
    else elementRef.current.classList.remove(className)
    pastScroll = currentScrollPos
  }

  useEffect(() => {
    scrollContainerRef.current.addEventListener('scroll', onScroll)
  }, [])
}

export const useScrollElementWindow = (elementRef, window, extraArgs) => {
  let className = 'hidden'
  if (extraArgs && extraArgs.className) className = extraArgs.className
  let pastScroll
  const onScroll = () => {
    let currentScrollPos = window.pageYOffset
    let scrollDiff
    if (typeof pastScroll === 'number') scrollDiff = currentScrollPos - pastScroll
    if (scrollDiff > 0) elementRef.current.classList.add(className)
    else elementRef.current.classList.remove(className)
    pastScroll = currentScrollPos
  }

  useEffect(() => {
    window.onscroll = onScroll
  }, [])
}

export const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  })

  // Set up the interval.
  useEffect(() => {
    function tick () {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
