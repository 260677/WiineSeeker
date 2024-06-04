import { validate, errors } from 'com'

function addNewReview(userComment, wineId, userId) {
    validate.text(wineId, 'wineId', true)
    // Encode the comment before sending it to the backend
    const encodedComment = encodeURIComponent(userComment)

    const requestBody = {
        comment: encodedComment,
        userId: userId
    }

    const url = `${import.meta.env.VITE_API_URL}/wines/${wineId}/reviews`

    return fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
    .then(res => {
        if (res.status === 201) return res.json()

        return res.json().then(body => {
            const { error, message } = body
            const constructor = errors[error]

            throw new constructor(message)
        })
    })
}

export default addNewReview