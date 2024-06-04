// @ts-nocheck
import { Review, Wine } from '../data/index.ts'
import { validate, errors } from 'com'

const { SystemError } = errors

function addNewReview(userId, wineId, comment): Promise<any> {
    validate.text(userId, 'userId', true)
    validate.text(wineId, 'wineId', true)
    validate.text(comment, 'comment', true)

    const decodedComment = decodeURIComponent(comment)

    return Review.create({ user: userId, wine: wineId, comment: decodedComment })
        .then(newReview => {
            if (!newReview) {
                throw new SystemError('Review creation failed')
            }
            console.log('New Review:', newReview)
            return Wine.findByIdAndUpdate(
                wineId,
                { $push: { comments: newReview._id } },
                { new: true }
            ).then(updatedWine => {
                if (!updatedWine) {
                    throw new SystemError('Wine update failed')
                }
                console.log('Updated Wine:', updatedWine)
                return newReview
            })
        })
        .then(newReview => {
            // Sanitize the response
            const sanitizedReview = {
              _id: newReview._id ? newReview._id.toString() : 'undefined',
              user: newReview.user ? newReview.user.toString() : 'undefined',
              wine: newReview.wine ? newReview.wine.toString() : 'undefined',
              comment: newReview.comment
            }
            console.log('Sanitized Review:', sanitizedReview)
            return sanitizedReview
        })
        .catch(error => {
            throw new SystemError('Error creating new review: ' + error.message)
        })
}

export default addNewReview