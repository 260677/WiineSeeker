// @ts-nocheck
import { logger } from './utils'
import { useState, useEffect } from 'react'
import logic from './logic'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import WineFilter from './components/WineFilter'
import Header from './components/Header'
import GeoLocation from './components/GeoLocation'
import Map from './components/Map'
import WineRating from './components/WineRating'
import RenderWines from './components/RenderWines'
import WineComment from './components/WineComment'
import { errors } from 'com'


const { UnauthorizedError } = errors

function App() {
  const token = sessionStorage.getItem('token')
  let userId = null

  if (token) {
    const [, payloadB64] = token.split('.')
    const payloadJSON = atob(payloadB64)
    const payload = JSON.parse(payloadJSON)
    userId = payload.sub
  }


  const navigate = useNavigate()

  const goToLogin = () => navigate('/login')
  const handleLoginClick = () => goToLogin()
  const handleRegisterClick = () => navigate('/register')
  const handleUserLoggedIn = () => navigate('/')
  const handleSubmit = () => navigate('/wines')
  const handleUserLoggedOut = () => goToLogin()


  logger.debug('App -> render')
  return <>
    
    <Routes>
        <Route path="/login" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login onRegisterClick={handleRegisterClick} onUserLoggedIn={handleUserLoggedIn} />} />
        <Route path="/register" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register onLoginClick={handleLoginClick} onUserRegistered={handleLoginClick} />} />
        <Route path="/*" element={logic.isUserLoggedIn() ? <Home onUserLoggedOut={handleUserLoggedOut} userId={userId}/> : <Navigate to="/login" />} />
       
      </Routes>
      

    </>
  
}
export default App
