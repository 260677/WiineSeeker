//@ts-nocheck
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express'
import logic from './logic'
import { errors } from 'com'
import tracer from 'tracer'
import colors from 'colors'
import jwt from 'jsonwebtoken'
import cors from 'cors'



dotenv.config()

const { TokenExpiredError } = jwt

const { MONGODB_URL, PORT, JWT_SECRET, JWT_EXP } = process.env

const logger = tracer.colorConsole({
    filters: {
        debug: colors.green,
        info: colors.blue,
        warn: colors.yellow,
        error: colors.red
    }
})

const {
    ContentError,
    SystemError,
    DuplicityError,
    NotFoundError,
    CredentialsError,
    UnauthorizedError
} = errors


mongoose.connect(MONGODB_URL)
    .then(() => {
        const api = express()

        const jsonBodyParser = express.json()

        api.use(cors())
        api.use(express.json())

        api.post('/users', jsonBodyParser, (req, res) => {
            try {
                const { name, email, password } = req.body

                logic.registerUser(name, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        if (error instanceof SystemError) {
                            logger.error(error.message)

                            res.status(500).json({ error: error.constructor.name, message: error.message })
                        } else if (error instanceof DuplicityError) {
                            logger.warn(error.message)

                            res.status(409).json({ error: error.constructor.name, message: error.message })
                        }
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof ContentError) {
                    logger.warn(error.message)

                    res.status(406).json({ error: error.constructor.name, message: error.message })
                } else {
                    logger.warn(error.message)

                    res.status(500).json({ error: SystemError.name, message: error.message })
                }
            }
        })

        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { email, password } = req.body

                logic.authenticateUser(email, password)
                    .then(userId => {
                        const token = jwt.sign({ sub: userId }, JWT_SECRET, { expiresIn: JWT_EXP })

                        res.json(token)
                    })
                    .catch(error => {
                        if (error instanceof SystemError) {
                            logger.error(error.message)

                            res.status(500).json({ error: error.constructor.name, message: error.message })
                        } else if (error instanceof CredentialsError) {
                            logger.warn(error.message)

                            res.status(401).json({ error: error.constructor.name, message: error.message })
                        } else if (error instanceof NotFoundError) {
                            logger.warn(error.message)

                            res.status(404).json({ error: error.constructor.name, message: error.message })
                        }
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof ContentError) {
                    logger.warn(error.message)

                    res.status(406).json({ error: error.constructor.name, message: error.message })
                } else {
                    logger.warn(error.message)

                    res.status(500).json({ error: SystemError.name, message: error.message })
                }
            }
        })

        api.get('/users/:targetUserId', (req, res) => {
            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                const { targetUserId } = req.params

                logic.retrieveUser(userId as string, targetUserId)
                    .then(user => res.json(user))
                    .catch(error => {
                        if (error instanceof SystemError) {
                            logger.error(error.message)

                            res.status(500).json({ error: error.constructor.name, message: error.message })
                        } else if (error instanceof NotFoundError) {
                            logger.warn(error.message)

                            res.status(404).json({ error: error.constructor.name, message: error.message })
                        }
                    })
            } catch (error) {
                if (error instanceof TypeError || error instanceof ContentError) {
                    logger.warn(error.message)
                    res.status(406).json({ error: error.constructor.name, message: error.message })
                } else if (error instanceof TokenExpiredError) {
                    logger.warn(error.message)
                    res.status(498).json({ error: UnauthorizedError.name, message: 'session expired' })
                } else {
                    logger.warn(error.message)
                    res.status(500).json({ error: SystemError.name, message: error.message })
                }
            }
        })

        api.get('/wines', async (req, res) => {

            try {
                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                const location = [parseFloat(req.query.latitude), parseFloat(req.query.longitude)]
                const proximity = parseFloat(req.query.proximity)
                const minPrice = parseFloat(req.query.minPrice)
                const maxPrice = parseFloat(req.query.maxPrice)
                const type = req.query.type

                const result = await logic.findWinesAndMarkets(userId, location, proximity, minPrice, maxPrice, type)

                console.log('Result API:', result)

                res.json(result)

            } catch (error) {
                if (error instanceof TypeError || error instanceof ContentError) {
                    logger.warn(error.message)
                    res.status(406).json({ error: error.constructor.name, message: error.message })
                } else if (error instanceof TokenExpiredError) {
                    logger.warn(error.message)
                    res.status(498).json({ error: UnauthorizedError.name, message: 'session expired' })
                } else {
                    logger.warn(error.message)
                    res.status(500).json({ error: SystemError.name, message: error.message })
                }
            }
        })

        api.post('/wines/:wineId/rate', jsonBodyParser, async (req, res) => {

            try {
                const { wineId } = req.params
                const { rating } = req.body

                console.log('Received Rating:', rating)

                const newAverageRating = await logic.addNewRating(wineId, rating)

                res.json({ message: 'Rating updated successfully', newAverageRating })

            } catch (error) {
                if (error instanceof TypeError || error instanceof ContentError) {
                    logger.warn(error.message)
                    res.status(406).json({ error: error.constructor.name, message: error.message })
                } else if (error instanceof TokenExpiredError) {
                    logger.warn(error.message)
                    res.status(498).json({ error: UnauthorizedError.name, message: 'session expired' })
                } else {
                    logger.warn(error.message)
                    res.status(500).json({ error: SystemError.name, message: error.message })
                }
            }
        })

        api.get('/wines/:wineId', async (req, res) => {

            try {
                const { wineId } = req.params

                const wine = await logic.retrieveWineById(wineId)
                res.json(wine)

            } catch (error) {
                if (error instanceof TypeError || error instanceof ContentError) {
                    logger.warn(error.message)
                    res.status(406).json({ error: error.constructor.name, message: error.message })
                } else if (error instanceof TokenExpiredError) {
                    logger.warn(error.message)
                    res.status(498).json({ error: UnauthorizedError.name, message: 'session expired' })
                } else {
                    logger.warn(error.message)
                    res.status(500).json({ error: SystemError.name, message: error.message })
                }
            }
        })

        api.post('/wines/:wineId/reviews', jsonBodyParser, async (req, res) => {
            const { userId, comment } = req.body
            const { wineId } = req.params
        
            // Trim the comment to ensure it's not empty or just spaces
            const trimmedComment = comment.trim()
        
            if (!trimmedComment) {
                res.status(406).json({ error: 'ContentError', message: 'Comment cannot be empty or contain only spaces' })
                return
            }
        
            // Logging the request details
            console.log('Request body:', req.body)
            console.log('wineId:', wineId)
            console.log('userId:', userId)
            console.log('comment:', trimmedComment)
        
            try {
                const newReview = await logic.addNewReview(userId, wineId, trimmedComment)
                res.status(201).json(newReview)
            } catch (error) {
                if (error instanceof TypeError || error instanceof ContentError) {
                    logger.warn(error.message)
                    res.status(406).json({ error: error.constructor.name, message: error.message })
                } else if (error instanceof TokenExpiredError) {
                    logger.warn(error.message)
                    res.status(498).json({ error: UnauthorizedError.name, message: 'session expired' })
                } else {
                    logger.warn(error.message)
                    res.status(500).json({ error: SystemError.name, message: error.message })
                }
            }
        })

        api.get('/users/:userId/:targetUserId', async (req, res) => {

            const { userId, targetUserId } = req.params

            try {
                const user = await logic.retrieveUserWithId(userId, targetUserId)
                res.status(200).json(user)

            } catch (error) {
                if (error instanceof TypeError || error instanceof ContentError) {
                    logger.warn(error.message)
                    res.status(406).json({ error: error.constructor.name, message: error.message })
                } else if (error instanceof TokenExpiredError) {
                    logger.warn(error.message)
                    res.status(498).json({ error: UnauthorizedError.name, message: 'session expired' })
                } else {
                    logger.warn(error.message)
                    res.status(500).json({ error: SystemError.name, message: error.message })
                }
            }
        })

        api.get('/wines/:wineId/reviews', async (req, res) => {
            try {
                const { wineId } = req.params;
                const reviews = await logic.retrieveReviews(wineId)
                res.json(reviews);


            } catch (error) {
                if (error instanceof TypeError || error instanceof ContentError) {
                    logger.warn(error.message)
                    res.status(406).json({ error: error.constructor.name, message: error.message })
                } else if (error instanceof TokenExpiredError) {
                    logger.warn(error.message)
                    res.status(498).json({ error: UnauthorizedError.name, message: 'session expired' })
                } else {
                    logger.warn(error.message)
                    res.status(500).json({ error: SystemError.name, message: error.message })
                }
            }
        })


        api.put('/wines/:wineId/reviews/:reviewId', jsonBodyParser, async (req, res) => {
            const { wineId, reviewId } = req.params
            const { comment, userId } = req.body
            const decodedComment = decodeURIComponent(comment) // Decode the comment

            console.log('enco', decodedComment)

            try {
                // Use editReview with decodedComment
                const updatedReview = await logic.editReview(reviewId, userId, wineId, decodedComment)
                res.status(200).json(updatedReview)
            } catch (error) {
                if (error instanceof TypeError || error instanceof ContentError) {
                    logger.warn(error.message)
                    res.status(406).json({ error: error.constructor.name, message: error.message })
                } else if (error instanceof TokenExpiredError) {
                    logger.warn(error.message)
                    res.status(498).json({ error: 'UnauthorizedError', message: 'session expired' })
                } else {
                    logger.warn(error.message)
                    res.status(500).json({ error: 'SystemError', message: error.message })
                }
            }
        })


        /* api.delete('/:reviewId', async (req, res) => {

            const { reviewId } = req.params

            try {
                const result = await logic.deleteReview(reviewId)

                res.status(200).json(result)
            } catch (error) {
                if (error instanceof NotFoundError) {
                    res.status(404).json({ error: 'Review not found', message: error.message })
                } else if (error instanceof SystemError) {
                    res.status(500).json({ error: 'Internal Server Error', message: error.message })
                } else {
                    console.error('Unexpected error:', error);
                    res.status(500).json({ error: 'Unexpected Error', message: 'An unexpected error occurred' })
                }
            }
        }) */

        api.listen(PORT, () => logger.info(`API listening on port ${PORT}`))
    })
    .catch(error => logger.error(error))