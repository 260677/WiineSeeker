// @ts-nocheck
import { Review } from '../data/index.ts'
import { validate, errors } from 'com'

const { SystemError } = errors

function editReview(reviewId: string, userId: string, wineId: string, comment: string): Promise<{ id: string; user: string; wine: string; comment: string; date: Date }> {
    validate.text(userId, 'userId', true)
    validate.text(wineId, 'wineId', true)
    validate.text(comment, 'comment', true)


    return (async () => {
    try {
        const existingReview = await Review.findById(reviewId)
        
        if (!existingReview) {
            throw new Error('Review not found')
        }
        if (existingReview.user.toString() !== userId) {
            throw new Error('Unauthorized: You are not allowed to edit this review')
        }
        
        existingReview.comment = comment
        const updatedReview = await existingReview.save()

        // Sanitize the response
        const sanitizedReview = {
            id: updatedReview._id ? updatedReview._id.toString() : 'undefined',
            user: updatedReview.user ? updatedReview.user.toString() : 'undefined',
            wine: updatedReview.wine ? updatedReview.wine.toString() : 'undefined',
            comment: updatedReview.comment,
            date: updatedReview.createdAt 
        }
        return sanitizedReview
    } catch (error) {
        throw new SystemError(`Failed to edit review: ${error.message}`)
    }
    })()    
}

export default editReview