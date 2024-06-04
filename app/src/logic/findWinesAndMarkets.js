import { validate, errors } from 'com'

function findWinesAndMarkets({coordinates, proximity, minPrice, maxPrice, type}) {

    validate.token(sessionStorage.token)

    const [, payloadB64] = sessionStorage.token.split('.')
    const payloadJSON = atob(payloadB64)
    const payload = JSON.parse(payloadJSON)
    const { sub: userId } = payload

    let url = `${import.meta.env.VITE_API_URL}/wines`

    const queryParams = new URLSearchParams()
    queryParams.append('userId', userId)
    queryParams.append('latitude', coordinates.latitude)
    queryParams.append('longitude', coordinates.longitude)
    queryParams.append('proximity', proximity)
    queryParams.append('minPrice', minPrice)
    queryParams.append('maxPrice', maxPrice)
    if (type) {
        queryParams.append('type', type)
    }


    url += `?${queryParams.toString()}`

    console.log('Request URL:', url)

    //logic
    return fetch(url, {
        headers: {
            'Authorization': `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json',
        }
    })
        .then(res => {
            if (res.status === 200) return res.json()

            return res.json()
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
            })
    })
}

export default findWinesAndMarkets