import { useState, useEffect } from 'react'


function GeoLocation({ setCoordinates }) {
  const [ setError ] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setCoordinates({ latitude, longitude })
        },
        (error) => {
          setError(error.message)
        }
      )
    } else {
      setError('Geolocation is not supported by this browser.')
    }
  }, [setCoordinates])

  
}

export default GeoLocation