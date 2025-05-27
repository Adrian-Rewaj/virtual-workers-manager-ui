import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import 'core-js'

import App from './App'
import store from './store/store'
import { initAxiosInstance } from './utils/axios/axiosInstance'

initAxiosInstance()

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
