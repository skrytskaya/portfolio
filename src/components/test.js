import React, { useEffect, useContext } from 'react'
import { ThemeData } from '../contexts/themeContext'

const Test = () => {
  const themeData = useContext(ThemeData)

  useEffect(() => {
    console.log('FROM TEST: ', themeData)
  }, [themeData])

  return (
    <div>TESTTTT</div>
  )
}

export default Test