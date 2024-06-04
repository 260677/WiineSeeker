// @ts-nocheck
import { ObjectId } from 'mongoose'
import { User, Wine, Market } from '../data/index.ts'
import { validate, errors } from 'com'



const { NotFoundError } = errors

type Wine = {
    id: string
    image: string
    title: string
    price: number
}

type Market = {
    id: string
    title: string
    address: string
    location: Point
    wines: string[]

}

function findWinesAndMarkets(userId: string, location: [number, number], proximity: number = 1000, minPrice: number = 3, maxPrice: number = 10, type?: string ): Promise<{ wines: [ObjectId], markets: [ObjectId] }> {
    validate.text(userId, 'userId', true)
    for (let i = 0; i < location.length; i++) {
        if (!Array.isArray(location) || location.length !== 2 || location.some(coord => typeof coord !== 'number')) {
            throw new TypeError('location should be an array of two numbers')
        }
    }
    if (typeof proximity !== 'number') throw new TypeError('proximity is not a number')
    if (typeof minPrice !== 'number') throw new TypeError('minPrice is not a number')
    if (typeof maxPrice !== 'number') throw new TypeError('maxPrice is not a number')
    if (type) validate.text(type)

    return (async () => {
        const user = await User.findById(userId)

        if (!user) throw new NotFoundError('User not found')

        // Query for markets within the specified distance
        let markets = await Market.find({
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: location
                    },
                    $maxDistance: proximity || 1000
                }
            }
        }).lean()

        const wineIds = markets.reduce((wineIdsAccum, market) => {
            market.wines.forEach(wineId => {
                const exists = wineIdsAccum.some(wineId2 => wineId2.toString() === wineId.toString())

                if (!exists)
                    wineIdsAccum.push(wineId)
            })

            return wineIdsAccum
        }, [])

        const query: { _id: { $in: ObjectId[] }, type?: string, price: { $gte: number, $lte: number } } = {
            _id: {
                $in: wineIds
            },
            price: {
                $gte: minPrice,
                $lte: maxPrice
            }
        }

        if (type)
            query.type = type

        const wines = await Wine.find(query).lean()

        markets = markets.filter(market => {
            market.wines = market.wines.filter(wineId => wines.some(wine => wine._id.toString() === wineId.toString()))

            return market.wines.length > 0
        })

        markets.forEach(market => {
            market.id = market._id.toString()
            delete market._id

            market.wines = market.wines.map(wineId => wineId.toString())
        })

        wines.forEach(wine => {
            wine.id = wine._id.toString()
            delete wine._id
        })

        return { markets, wines }
        
    })()
}

export default findWinesAndMarkets