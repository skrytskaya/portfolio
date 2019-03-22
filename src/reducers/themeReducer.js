export const initialThemeState = {
  header: {
    backgroundColor: 'light',
    textColor: 'dark',
  },
  footer: {
    backgroundColor: 'light',
    textColor: 'dark',
  },
  menu: {
    backgroundColor: 'light',
    textColor: 'dark'
  }
}

export const themeReducer = (state, action) => {
  switch (action.type) {
  case 'SET_THEME':
    return {
      ...state,
      ...action.payload,
    }
  default:
    return state
  }
}
