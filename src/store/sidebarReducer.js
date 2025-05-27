import { TOGGLE_SIDEBAR } from './sidebarActions'

export const sidebarReducer = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarVisible: !state.isSidebarVisible
      }

    default:
      return state
  }
}
