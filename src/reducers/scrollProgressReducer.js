export const initialScrollProgressState = 0

export const scrollProgressReducer = (state, action) => {
  switch (action.type) {
  case 'SET_SCROLL_PROGRESS':
    return action.payload
  default:
    return state
  }
}
