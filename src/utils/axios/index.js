import { enqueueSnackbar } from '../../store/notificationsActions'
import store from '../../store/store'
import { logout } from '../../views/pages/login/authActions'

export const makeRequest = async ({ axiosRequest, successText, skipEnqueueSnackbar }) => {
  try {
    const response = await axiosRequest()

    if (successText) {
      !skipEnqueueSnackbar && store.dispatch(
        enqueueSnackbar({
          message: String(successText),
          options: {
            variant: 'success',
          },
        }),
      )
    }

    return response
  } catch (error) {
    console.log('error', error)
    if (error) {
      !skipEnqueueSnackbar && store.dispatch(
        enqueueSnackbar({
          message: String(error.response.data.message ?? error),
          options: {
            variant: 'error',
          },
        }),
      )

      if (error.response.data.statusCode === 401) {
        logout()
      }
    }
  }
}
