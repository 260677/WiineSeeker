import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'


function Map({ coordinates, expandedWine }) {
  const mapRef = useRef(null)

  useEffect(() => {
    if (!mapRef.current) {
      // Create the map instance
      mapRef.current = L.map('map-container', {
        scrollWheelZoom: true // Disable scroll wheel zoom
      }).setView(coordinates, 15)

      // Add the TileLayer (map tiles)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current)

      // Add a marker to the map at the specified coordinates
      const marker = L.marker(coordinates).addTo(mapRef.current)
      marker.bindPopup(`<b><a href="https://www.openstreetmap.org/?mlat=${coordinates[0]}&mlon=${coordinates[1]}" target="_blank" style="color: purple">${expandedWine.market.title}</a></b><br><a href="https://www.openstreetmap.org/?mlat=${coordinates[0]}&mlon=${coordinates[1]}" target="_blank" style="color: purple">${expandedWine.market.address}</a>`).openPopup()
    } else {
      // Update map view if coordinates change
      mapRef.current.setView(coordinates, 16)
    }
  }, [coordinates, expandedWine])

  return <div id="map-container" className="w-full h-96 rounded mb-8 shadow-lg min-h-400px " style={{ zIndex: 1 }}/>
}

export default Map