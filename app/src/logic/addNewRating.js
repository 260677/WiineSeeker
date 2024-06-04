import { validate, errors } from 'com'

function addNewRating(userRating, wineId) {
    validate.text(wineId, 'wineId', true)

    let url = `${import.meta.env.VITE_API_URL}/wines/${wineId}/rate`

    const requestBody = {
        rating: userRating
    };

    return fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
    })
    .then(res => {
        if (res.status === 200) return res.json()

        return res.json().then(body => {
            const { error, message } = body

            const constructor = errors[error]

            throw new constructor(message)
        })
    })
    
}

export default addNewRating