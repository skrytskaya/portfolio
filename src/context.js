import React, { useReducer } from 'react'
import { ThemeDispatch, ThemeData } from './contexts/themeContext'
import {
  ScrollProgressDispatch,
  ScrollProgressData
} from './contexts/scrollProgressContext'
import { initialThemeState, themeReducer } from './reducers/themeReducer'
import {
  initialScrollProgressState,
  scrollProgressReducer
} from './reducers/scrollProgressReducer'
import {
  ModalDispatch,
  ModalData
} from './contexts/modalContext'
import {
  initialModalState,
  modalReducer
} from './reducers/modalReducer'

const Context = ({ children, location }) => {
  const [themeData, themeDispatch] = useReducer(themeReducer, location && location.state && location.state.themeData ? location.state.themeData : initialThemeState)
  const [scrollProgressData, scrollProgressDispatch] = useReducer(scrollProgressReducer, initialScrollProgressState)
  const [modalData, modalDispatch] = useReducer(modalReducer, initialModalState)

  return (
    <ThemeDispatch.Provider value={themeDispatch}>
      <ThemeData.Provider value={themeData}>
        <ScrollProgressDispatch.Provider value={scrollProgressDispatch}>
          <ScrollProgressData.Provider value={scrollProgressData}>
            <ModalDispatch.Provider value={modalDispatch}>
              <ModalData.Provider value={modalData}>
                {children}
              </ModalData.Provider>
            </ModalDispatch.Provider>
          </ScrollProgressData.Provider>
        </ScrollProgressDispatch.Provider>
      </ThemeData.Provider>
    </ThemeDispatch.Provider>
  )
}

export default Context
