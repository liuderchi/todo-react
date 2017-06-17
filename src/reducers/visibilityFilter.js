const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':  // NOTE should consistent with action type
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
