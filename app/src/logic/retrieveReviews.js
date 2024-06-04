import { validate, errors } from 'com'

function retrieveReviews(wineId) {
  validate.text(wineId, 'wineId', true)

  const url = `${import.meta.env.VITE_API_URL}/wines/${wineId}/reviews`

  return fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${sessionStorage.token}`,
      'Content-Type': 'application/json',
    },
  })
  .then(res => {
    if (res.ok) {
      return res.json().then(data => {
        // Decode the comments before returning them
        return data.map(item => {
          return {
            ...item,
            comment: decodeURIComponent(item.comment)
          }
        })
      })
    }
    return res.json().then(body => {
      const { error, message } = body
      const constructor = errors[error]
      throw new constructor(message)
    })
  })
}

export default retrieveReviews