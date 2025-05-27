export const ENQUEUE_SNACKBAR = 'ENQUEUE_SNACKBAR'
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR'
export const REMOVE_SNACKBAR = 'REMOVE_SNACKBAR'

export const enqueueSnackbar = (notification) => ({
  type: ENQUEUE_SNACKBAR,
  notification: {
    ...notification,
    key: new Date().getTime() + Math.random(),
  },
})

export const removeSnackbar = (key) => ({
  type: REMOVE_SNACKBAR,
  key,
})
