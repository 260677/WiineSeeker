import { User, Wine } from '../data/index.ts'
import { validate, errors } from 'com'

const { NotFoundError, SystemError } = errors

function retrieveWines(userId: string): Promise<{ image: string, title: string, description: string, type: string, price: number }[]> {
    validate.text(userId, 'userId', true)


    return (async () => {
        try {
            const user = await User.findById(userId).lean().exec()
            if (!user) {
                throw new NotFoundError('User not found')
            }

            const wines = await Wine.find().lean().exec()

            return wines.map(wine => ({
                image: wine.image,
                title: wine.title,
                description: wine.description,
                type: wine.type,
                price: wine.price
            }))
        } catch (error) {
            if (error instanceof NotFoundError) {
                throw error
            }
            throw new SystemError(error.message)
        }
    })()
}

export default retrieveWines


