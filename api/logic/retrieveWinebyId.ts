// @ts-nocheck
import { Wine } from '../data/index.ts'
import { validate, errors } from 'com'

const { NotFoundError, SystemError } = errors

function retrieveWineById(wineId: string): Promise<{ image: string, title: string, description: string, type: string, price: number, rates: number[], averageRating: number }> {
    validate.text(wineId, 'wineId', true)

    return Wine.findById(wineId).lean().exec()
        .then(wine => {
            if (!wine) {
                throw new NotFoundError('Wine not found')
            }
            return {
                image: wine.image,
                title: wine.title,
                description: wine.description,
                type: wine.type,
                price: wine.price,
                rates: wine.rates,
                averageRating: wine.averageRating
            };
        })
        .then(sanitizedWine => {
            // Sanitize the wine object by removing any sensitive information
            return {
                image: sanitizedWine.image,
                title: sanitizedWine.title,
                description: sanitizedWine.description,
                type: sanitizedWine.type,
                price: sanitizedWine.price,
                rates: sanitizedWine.rates,
                averageRating: sanitizedWine.averageRating
            };
        })
        .catch(error => {
            if (error instanceof NotFoundError) {
                throw error;
            }
            throw new SystemError(error.message)
        })
}

export default retrieveWineById;