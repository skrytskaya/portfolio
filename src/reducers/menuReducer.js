export const initialMenuState = {
    isOpen: false,
    buttonOpen: false
  }
  
  export const menuReducer = (state, action) => {
    switch (action.type) {
    case 'SET_MENU':
      return action.payload
    case 'TOGGLE_MENU':
      return {
          ...state,
          isOpen: !initialMenuState.isOpen,
          buttonOpen: !initialMenuState.buttonOpen
      }
    case 'HIDE_MENU':
      return initialMenuState
    default:
      return state
    }
  }
  