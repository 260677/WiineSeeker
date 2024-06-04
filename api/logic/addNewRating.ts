// @ts-nocheck
import { validate, errors } from 'com'
import { Wine } from '../data/index.ts'

const { SystemError } = errors

function calculateAverageRating(ratings) {
    if (ratings.length === 0) return 0
    const sum = ratings.reduce((total, rating) => total + rating, 0)
    const average = sum / ratings.length;
    return Math.round(average * 10) / 10
}

function addNewRating(wineId: string, rating: number): Promise<{ averageRating: number }> {
    validate.text(wineId, 'wineId', true)
    if (typeof rating !== 'number' || rating < 0 || rating > 5) {
        throw new TypeError('rating should be a number between 0 and 5')
    }

    return Wine.findById(wineId)
        .then(wine => {
            if (!wine) {
                throw new SystemError('Wine not found')
            }

            wine.rates.push(rating)
            wine.averageRating = calculateAverageRating(wine.rates)
            return wine.save()
        })
        .then(wine => {
            // Sanitize the response
            return {
                averageRating: wine.averageRating
            }
        })
        .catch(error => {
            throw new SystemError('Error updating rating: ' + error.message)
        })
}

export default addNewRating