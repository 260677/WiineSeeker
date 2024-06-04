//@ts-nocheck
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { User, Wine, Review } from '../data/index.ts'
import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { Types: { ObjectId } } = mongoose
const { NotFoundError } = errors

describe('retrieveComments', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('retrieves comments for a wine with multiple reviews', () =>
        Promise.all([
            User.deleteMany(),
            Wine.deleteMany(),
            Review.deleteMany(),
        ])
        .then(() =>
            User.create({ name: 'Carol Machado', email: 'carol@mac.com', password: '123carol123' })
            .then(user =>
                Wine.create({ title: 'Test Wine', comments: [] })
                .then(wine =>
                    Promise.all([
                        Review.create({ user: user._id, wine: wine._id, comment: 'Great wine!', createdAt: new Date() }),
                        Review.create({ user: user._id, wine: wine._id, comment: 'Not bad.', createdAt: new Date() })
                    ])
                    .then(([review1, review2]) => {
                        wine.comments.push(review1._id, review2._id)
                        return wine.save()
                    })
                    .then(() => logic.retrieveComments(wine._id.toString()))
                    .then(reviews => {
                        expect(reviews).to.be.an('array')
                        expect(reviews).to.have.lengthOf(2)
                        expect(reviews[0].comment).to.equal('Great wine!')
                        expect(reviews[1].comment).to.equal('Not bad.')
                    })
                )
            )
        )
    )

    it('retrieves comments for a wine with no reviews', () =>
        Promise.all([
            User.deleteMany(),
            Wine.deleteMany(),
            Review.deleteMany(),
        ])
        .then(() =>
            Wine.create({ title: 'Test Wine', comments: [] })
            .then(wine => 
                logic.retrieveComments(wine._id.toString())
                .then(reviews => {
                    expect(reviews).to.be.an('array')
                    expect(reviews).to.have.lengthOf(0)
                })
            )
        )
    )

    it('throws an error when the wine does not exist', () =>
        Promise.all([
            User.deleteMany(),
            Wine.deleteMany(),
            Review.deleteMany(),
        ])
        .then(() => {
            const nonExistentWineId = new ObjectId().toString()
            return logic.retrieveComments(nonExistentWineId)
                .then(
                    () => { throw new Error('Expected error was not thrown') },
                    error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal('Wine not found')
                    }
                )
        })
    )

    after(() => mongoose.disconnect())
})