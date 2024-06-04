import React from 'react'
import Map from './Map'
import WineRating from './WineRating'

function formatHours(hours) {
  const openingTime = hours[0].open
  const closingTime = hours[0].close
  const firstDay = hours[0].day
  const lastDay = hours[hours.length - 1].day

  return `${firstDay} to ${lastDay}, ${openingTime} to ${closingTime}`
}

function RenderWines({ renderStars, toggleExpanded, filteredWines, expandedWine, userId }) {
  return (
    <div>
      <ul>
        {Array.isArray(filteredWines.markets) &&
          filteredWines.markets.map((market) => (
            <React.Fragment key={market.id}>
              {market.wines.map((wineId) => {
                const wine = filteredWines.wines.find((w) => w.id === wineId)
                const isExpanded = expandedWine && expandedWine.wineId === wine.id && expandedWine.marketId === market.id

                return (
                  <React.Fragment key={`${market.id}-${wine.id}`}>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleExpanded(wine.id, market.id)
                      }}
                    >
                      <li className={`flex items-center mt-16 mr-4 mb-16 p-50px ${isExpanded ? 'expanded' : ''}`}>
                       
                        {!isExpanded && (
                          <>
                            <div>
                              <img className="w-40 h-40" src={wine.image} alt="wine image" />
                            </div>
                            <div>
                              <h2 className="text-lg text-gray-700 font-semibold mb-8px">{wine.title}</h2>
                              <p className="text-gray-600 font-light">Price: €{wine.price}</p>
                              <p className="text-yellow-700 text-ml font-light">
                                Rating: {wine.rates.length > 1 ? renderStars(wine.averageRating) : renderStars(wine.rates[0])}
                              </p>
                              {market && <p className="text-gray-600 font-light">Market: {market.title}</p>}
                            </div>
                          </>
                        )}
                      </li>
                    </a>
                   
                    {isExpanded && (
                      <li className="flex items-center justify-center ml-4 mr-4 mb-4">
                        <div className="expanded-detail-content transition delay-1000 duration-1000 ease-in-out">
                          <div className="flex justify-center mb-8">
                            <img src={wine.image} alt="wine image" className="w-60 h-60" />
                          </div>
                          <div>
                            <h2 className="text-lg text-gray-700 font-semibold mb-8px">{wine.title}</h2>
                            <p className="text-ml text-gray-700 font-thin mb-8px">{wine.description}</p>
                            <p className="text-gray-700 text-ml font-light">Price: €{wine.price}</p>
                            <div>
                              <p className="text-yellow-700 text-ml font-light">
                                Rating: {wine.rates.length > 1 ? renderStars(wine.averageRating) : renderStars(wine.rates[0])}
                              </p>
                              <WineRating wineId={wineId} expandedWine={expandedWine} userId={userId} />
                            </div>
                            {market && (
                              <div className="market-details mb-4">
                                <p className="text-ml text-gray-700 font-semibold mb-8px">{market.title}</p>
                                <p className="text-gray-700 text-ml font-light">{market.address}</p>
                                <p className="text-gray-700 text-ml font-light">
                                  <span className="font-semibold">Opening hours:</span> {formatHours(market.hours)}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </li>
                    )}
                    {isExpanded && (
                      <div className="relative h-96 mb-4">
                        <Map coordinates={expandedWine.market.location.coordinates} expandedWine={expandedWine} />
                      </div>
                    )}
                  </React.Fragment>
                )
              })}
            </React.Fragment>
          ))}
      </ul>
    </div>
  )
}

export default RenderWines