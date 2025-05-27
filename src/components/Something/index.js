// import PropTypes from 'prop-types'
// import { useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { useSnackbar } from 'notistack'
//
// const Notifier = (props) => {
//   const notifications = useSelector(state => state.notifications)
//   const { enqueueSnackbar } = useSnackbar()
//
//   useEffect(() => {
//     notifications.forEach(({ message, options = {} }) => {
//       enqueueSnackbar(message, options)
//     })
//   }, [notifications])
//
//   return null
// }
//
// Notifier.propTypes = {
//   notifications: PropTypes.array,
//   closeSnackbar: PropTypes.func,
//   enqueueSnackbar: PropTypes.func,
//   removeSnackbar: PropTypes.func,
// }

// const mapStateToProps = store => ({
//   notifications: store.notifications,
// })
//
// const mapDispatchToProps = dispatch => ({
//   removeSnackbar: (keyToRemove) =>
//     dispatch(removeSnackbar(keyToRemove)),
// })

// export default Notifier
