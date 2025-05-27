import { CLOSE_SNACKBAR, ENQUEUE_SNACKBAR, REMOVE_SNACKBAR } from './notificationsActions'

export const notificationsReducer = (state = [], action) => {
  switch (action.type) {
    case ENQUEUE_SNACKBAR:
      return [
        ...state,
        {
          ...action.notification,
        },
      ]

    case CLOSE_SNACKBAR:
      return [...state].map((notification) =>
        action.dismissAll || notification.key === action.key
          ? { ...notification, dismissed: true }
          : { ...notification },
      )

    case REMOVE_SNACKBAR:
      return [...state].filter((notification) => notification.key !== action.key)

    default:
      return state
  }
}
