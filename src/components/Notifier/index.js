import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'
import store from '../../store/store'
import { enqueueSnackbar, removeSnackbar } from '../../store/notificationsActions'

const Notifier = () => {
  const notifications = useSelector((state) => state.notifications)
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    notifications.forEach(({ key, message, options = {} }) => {
      enqueueSnackbar(String(message), options)
      store.dispatch(removeSnackbar(key))
    })
  }, [notifications])

  return null
}

export default Notifier
