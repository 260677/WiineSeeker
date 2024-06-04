import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logic from '../logic'
import RenderWines from './RenderWines'

function WineFilter({ coordinates, userId }) {
  const [lowestPrice, setLowestPrice] = useState('')
  const [highestPrice, setHighestPrice] = useState('')
  const [proximityRange, setProximityRange] = useState(1000)
  const [selectedType, setSelectedType] = useState('')
  const [isPressed250, setIsPressed250] = useState(false)
  const [isPressed500, setIsPressed500] = useState(false)
  const [isPressed750, setIsPressed750] = useState(false)
  const [isPressed1000, setIsPressed1000] = useState(false)
  const [isPressedWhite, setIsPressedWhite] = useState(false)
  const [isPressedRed, setIsPressedRed] = useState(false)
  const [isPressedPink, setIsPressedPink] = useState(false)
  const [expandedWine, setExpandedWine] = useState(null)
  const [showOnlyOpenMarkets, setShowOnlyOpenMarkets] = useState(false)
  const [filteredData, setFilteredData] = useState(null)
  const [filteredWines, setFilteredWines] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    
    if (filteredData) {
      setFilteredWines(filteredData)
    }
  }, [filteredData])

  const handleLowestPriceChange = (event) => {
    setLowestPrice(event.target.value)
  }

  const handleHighestPriceChange = (event) => {
    setHighestPrice(event.target.value)
  }

  const handleProximityChange = (range) => {
    setProximityRange(range)
    setIsPressed250(range === '250')
    setIsPressed500(range === '500')
    setIsPressed750(range === '750')
    setIsPressed1000(range === '1000')
  }

  const handleSelectType = (type) => {
    setSelectedType(type)
    setIsPressedRed(type === 'red')
    setIsPressedWhite(type === 'white')
    setIsPressedPink(type === 'pink')
  }

  const handleApplyFilter = async () => {
    try {
      const minPrice = parseFloat(lowestPrice)
      const maxPrice = parseFloat(highestPrice)
      const proximity = parseFloat(proximityRange)
      const type = selectedType || undefined

      const url = `/wines?minPrice=${minPrice}&maxPrice=${maxPrice}&proximity=${proximity}&type=${type}`
      navigate(url, { replace: true })

      const data = await logic.findWinesAndMarkets({ coordinates, proximity, minPrice, maxPrice, type })

      if (showOnlyOpenMarkets) {
        const currentDayOfWeek = new Date().getDay()
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const currentDayName = dayNames[currentDayOfWeek]
        const currentTime = new Date().toTimeString().slice(0, 5) // 'HH:MM' format

        
        data.markets = data.markets.filter((market) => {
          return market.hours.some((hour) => {
            const [openHour, openMinute] = hour.open.split(':').map(Number)
            const [closeHour, closeMinute] = hour.close.split(':').map(Number)
            const openTime = new Date()
            const closeTime = new Date()
            const currentTime = new Date()

            openTime.setHours(openHour, openMinute)
            closeTime.setHours(closeHour, closeMinute)

            return hour.day === currentDayName && currentTime >= openTime && currentTime <= closeTime;
          })
        })
     
        data.wines = data.wines.filter((wine) =>
          data.markets.some((market) => market.wines.includes(wine.id))
        )
      }

      setFilteredData(data)
      console.log('filteredData:', data)
    } catch (error) {
      alert(error)
    }
  }

  const renderStars = (rate) => {
    const filledStars = '★'.repeat(rate)
    const emptyStars = '☆'.repeat(6 - rate)
    return `${filledStars}${emptyStars} (${rate}/5)`
  }

  const toggleExpanded = (wineId, marketId) => {
    const market = filteredWines.markets.find((m) => m.id === marketId)
    const wine = filteredWines.wines.find((w) => w.id === wineId)
    setExpandedWine({ wineId, marketId, market, wine })
  }

  return (
    <div>
      <h1 className="flex justify-center text-fuchsia-800 antialiased mt-8 font-semibold">Distance</h1>
      <div className="flex justify-center space-x-4 mb-2">
        <button
          className={`py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 w-16 h-16 rounded-full bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased flex items-center justify-center ${isPressed250 ? 'bg-fuchsia-200' : 'bg-white hover:bg-fuchsia-200'}`}
          onClick={() => handleProximityChange('250')}
        >
          250mt
        </button>
        <button
          className={`py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 w-16 h-16 rounded-full bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased flex items-center justify-center ${isPressed500 ? 'bg-fuchsia-200' : 'bg-white hover:bg-fuchsia-200'}`}
          onClick={() => handleProximityChange('500')}
        >
          500mt
        </button>
        <button
          className={`py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 w-16 h-16 rounded-full bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased flex items-center justify-center ${isPressed750 ? 'bg-fuchsia-200' : 'bg-white hover:bg-fuchsia-200'}`}
          onClick={() => handleProximityChange('750')}
        >
          750mt
        </button>
        <button
          className={`py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 w-16 h-16 rounded-full bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased flex items-center justify-center ${isPressed1000 ? 'bg-fuchsia-200' : 'bg-white hover:bg-fuchsia-200'}`}
          onClick={() => handleProximityChange('1000')}
        >
          1km
        </button>
      </div>

      <div className="price-filter flex flex-col items-center mt-4 mb-2">
        <label htmlFor="lowest-price" className="flex justify-center text-fuchsia-800 antialiased mb-2 font-semibold">
          Lowest Price
        </label>
        <input
          type="number"
          id="lowest-price"
          value={lowestPrice}
          onChange={handleLowestPriceChange}
          className="shadow mb-4 appearance-none antialiased border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <label htmlFor="highest-price" className="flex justify-center antialiased mb-2 font-semibold text-fuchsia-800">
          Highest Price
        </label>
        <input
          type="number"
          id="highest-price"
          value={highestPrice}
          onChange={handleHighestPriceChange}
          className="shadow mb-2 appearance-none antialiased border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex justify-center space-x-4 ">
        <button
          className={`${isPressedRed ? 'bg-fuchsia-200' : 'bg-white hover:bg-fuchsia-200'} py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 rounded bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased`}
          onClick={() => handleSelectType("red")}
        >
          Red
        </button>
        <button
          className={`${isPressedWhite ? 'bg-fuchsia-200' : 'bg-white hover:bg-fuchsia-200'} py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 rounded bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased`}
          onClick={() => handleSelectType("white")}
        >
          White
        </button>
        <button
          className={`${isPressedPink ? 'bg-fuchsia-200' : 'bg-white hover:bg-fuchsia-200'} py-2 px-8 text-fuchsia-800 font-semibold mb-2 mt-4 rounded bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased`}
          onClick={() => handleSelectType("pink")}
        >
          Pink
        </button>
      </div>

      <div className="flex justify-center mb-2 mt-4">
        <label className="text-fuchsia-800 font-semibold">
          <input
            type="checkbox"
            checked={showOnlyOpenMarkets}
            onChange={() => setShowOnlyOpenMarkets(!showOnlyOpenMarkets)}
            className="mr-2 transform scale-125 font-semibold"
          />
          Show Only Open Markets
        </label>
      </div>

      <div className="flex justify-center mb-2">
        <button
          className="bg-white hover:bg-fuchsia-200 py-2 px-16 text-fuchsia-800 font-semibold mb-2 mt-4 rounded bg-fucs-500 border-none cursor-pointer shadow-sm shadow-fuchsia-700 antialiased"
          onClick={handleApplyFilter}
        >
          Seek Wine
        </button>
      </div>

      {filteredWines && (
        <RenderWines renderStars={renderStars} toggleExpanded={toggleExpanded} filteredWines={filteredWines} expandedWine={expandedWine} userId={userId}
        />
      )}
    </div>
  )
}

export default WineFilter