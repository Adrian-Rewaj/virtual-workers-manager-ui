import React, { useEffect } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { getAccessToken, isLoggedIn } from 'axios-jwt'
import { useNavigate } from 'react-router-dom'

const DefaultLayout = () => {
  const navigate = useNavigate()

  const authorize = async () => {
    if (!await isLoggedIn()) {
      navigate('/login')
    }
  }

  useEffect(() => {
    authorize()
  }, [getAccessToken])

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
