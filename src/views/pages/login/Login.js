import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import { login } from './authActions'
import validate from 'validate.js'

const schema = {
  username: {
    presence: { allowEmpty: false, message: 'is required' },
  },
  password: {
    presence: { allowEmpty: false, message: 'is required' },
  },
}

const Login = () => {
  const navigate = useNavigate()
  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  })
  const handleLoginClick = async (event) => {
    event.preventDefault()
    if (await login(formState.values.username, formState.values.password)) {
      navigate('/')
    }
  }

  const handleChange = (event) => {
    event.persist()

    setFormState((newformState) => ({
      ...newformState,
      values: {
        ...newformState.values,
        [event.target.name]:
          event.target.type === 'checkbox' ? event.target.checked : event.target.value,
      },
      touched: {
        ...newformState.touched,
        [event.target.name]: true,
      },
    }))
  }

  const hasError = (field) => !!(formState.touched[field] && formState.errors[field])

  useEffect(() => {
    const errors = validate(formState.values, schema)

    setFormState((newformState) => ({
      ...newformState,
      isValid: !errors,
      errors: errors || {},
    }))
  }, [formState.values])

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        name="username"
                        placeholder="Username"
                        autoComplete="username"
                        feedbackInvalid={'Please type you login'}
                        invalid={hasError('username')}
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        name="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        feedbackInvalid={'Please type you proper password'}
                        invalid={hasError('password')}
                        onChange={handleChange}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          onClick={handleLoginClick}
                          disabled={!formState.isValid}
                          color="primary"
                          className="px-4"
                        >
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
