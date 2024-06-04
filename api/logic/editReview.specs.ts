// @ts-nocheck
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { User, Wine, Review } from '../data/index.ts'
import editReview from '../logic/editReview'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { SystemError } = errors

describe('editReview', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    beforeEach(() => 
        Promise.all([
            User.deleteMany(),
            Wine.deleteMany(),
            Review.deleteMany(),
        ])
    )

    it('edits an existing review successfully (happy path 1)', async () => {
        const user = await User.create({ name: 'Carol Machado', email: 'carol@mac.com', password: '123carol123' })
        const wine = await Wine.create({ title: 'Chateau Margaux', description: 'A rich and complex wine', type: 'red', price: 25 })
        const review = await Review.create({ user: user._id, wine: wine._id, comment: 'Good wine!' })

        const newComment = 'Great wine!'
        const updatedReview = await editReview(review._id.toString(), user._id.toString(), wine._id.toString(), encodeURIComponent(newComment))

        expect(updatedReview.comment).to.equal(newComment)

        const updatedReviewFromDb = await Review.findById(review._id)
        expect(updatedReviewFromDb.comment).to.equal(newComment)
    })

    it('edits an existing review successfully (happy path 2)', async () => {
        const user = await User.create({ name: 'Rafaela Machado', email: 'rafa@mac.com', password: '123rafa123' })
        const wine = await Wine.create({ title: 'Domaine de la Romanée-Conti', description: 'An exquisite and rare wine', type: 'red', price: 30 })
        const review = await Review.create({ user: user._id, wine: wine._id, comment: 'Good wine!' })

        const newComment = 'Amazing wine!'
        const updatedReview = await editReview(review._id.toString(), user._id.toString(), wine._id.toString(), encodeURIComponent(newComment))

        expect(updatedReview.comment).to.equal(newComment)

        const updatedReviewFromDb = await Review.findById(review._id)
        expect(updatedReviewFromDb.comment).to.equal(newComment)
    })

    it('throws an error when a user tries to edit someone else\'s review (unhappy path)', async () => {
        const user1 = await User.create({ name: 'Charlie Brown', email: 'charlie@brown.com', password: 'charliepassword' })
        const user2 = await User.create({ name: 'Lucy Van Pelt', email: 'lucy@vanpelt.com', password: 'lucypassword' })
        const wine = await Wine.create({ title: 'Chateau Margaux', description: 'A rich and complex wine', type: 'red', price: 25 })
        const review = await Review.create({ user: user1._id, wine: wine._id, comment: 'Good wine!' })

        const newComment = 'Not so good wine!'
        try {
            await editReview(review._id.toString(), user2._id.toString(), wine._id.toString(), encodeURIComponent(newComment))
            throw new Error('Expected error was not thrown')
        } catch (error) {
            expect(error).to.be.instanceOf(SystemError)
            expect(error.message).to.equal('Failed to edit review: Unauthorized: You are not allowed to edit this review')
        }
    })

    after(() => mongoose.disconnect())
})