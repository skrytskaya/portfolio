export const initialModalState = {
  isActive: false,
  ModalComponent: null,
  modalData: null
}

export const modalReducer = (state, action) => {
  switch (action.type) {
  case 'SET_MODAL':
    return action.payload
  case 'HIDE_MODAL':
    return initialModalState
  default:
    return state
  }
}
