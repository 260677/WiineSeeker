import { validate, errors } from 'com'

function editReview(reviewId, comment, wineId, userId) {

  const url = `http://localhost:8080/wines/${wineId}/reviews/${reviewId}`

  const encodedComment = encodeURIComponent(comment)

  const requestBody = {
    comment: encodedComment,
    userId,
  }

  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
  .then(res => {
    if (res.ok) return res.json()

    return res.json().then(body => {
      const { error, message } = body
      const constructor = errors[error]

      throw new constructor(message)
    })
  })
  .then(updatedReview => {
    return updatedReview
  })
  .catch(error => {
    throw new Error(`Failed to update review: ${error.message}`)
  })
}

export default editReview