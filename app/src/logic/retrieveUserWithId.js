import { validate, errors } from 'com'

function retrieveUserWithId(targetUserId) {
    validate.token(sessionStorage.token)

    const [, payloadB64] = sessionStorage.token.split('.')
    const payloadJSON = atob(payloadB64)
    const payload = JSON.parse(payloadJSON)
    const { sub: userId } = payload

    const url = `${import.meta.env.VITE_API_URL}/users/${userId}/${targetUserId}`

    return fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json',
        }
    })
    .then(res => {
        if (res.status === 200) return res.json()

        return res.json().then(body => {
            const { error, message } = body

            const constructor = errors[error]

            throw new constructor(message)
        });
    });
}

export default retrieveUserWithId