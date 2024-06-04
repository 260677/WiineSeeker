// @ts-nocheck
import { logger, showFeedback } from '../utils'
import logic from '../logic'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Logo from '../img/wiineseekertrans2.png'
import Header from '../components/Header'
import WineFilter from '../components/WineFilter'
import GeoLocation from '../components/GeoLocation'
import RenderWines from '../components/RenderWines'
import Map from '..components/Map'
import { useNavigate } from 'react-router-dom'

function Home({ onUserLoggedOut, userId }) {
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null })
  const [userLocation, setUserLocation] = useState(null)

  const onLogout = () => {
    onUserLoggedOut()
  }

  const handleCoordinates = (coordinates) => {
    setUserLocation(coordinates)
  }

  logger.debug('Home -> render')
  return (
    <main>
      <Header onUserLoggedOut={onLogout} coordinates={coordinates} />
      <div>
        <GeoLocation coordinates={coordinates} setCoordinates={setCoordinates} onCoordinatesChange={handleCoordinates} />
        <WineFilter coordinates={coordinates} userId={userId} />
      </div>
    </main>
  )
}

export default Home