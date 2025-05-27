import { combineReducers } from 'redux'
import { notificationsReducer } from './notificationsReducer'
import { sidebarReducer } from './sidebarReducer'

const rootReducer = combineReducers({
  notifications: notificationsReducer,
  sidebar: sidebarReducer,
})

export default rootReducer
