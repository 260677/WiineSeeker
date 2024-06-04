// @ts-nocheck
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { User, Wine, Review } from '../data/index.ts'
import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { Types: { ObjectId } } = mongoose
const { SystemError } = errors

describe('addNewReview', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    beforeEach(() => 
        Promise.all([
            User.deleteMany(),
            Wine.deleteMany(),
            Review.deleteMany(),
        ])
    )

    it('adds a new review to a wine and verifies it is correctly added', async () => {
        const user = await User.create({ name: 'Carol Machado', email: 'carol@mac.com', password: '123carol123' })
        const wine = await Wine.create({ title: 'Chateau Margaux', description: 'A rich and complex wine', type: 'red', price: 25 })

        const comment = 'Very good wine!'
        const newReview = await logic.addNewReview(user._id.toString(), wine._id.toString(), encodeURIComponent(comment))

        const updatedWine = await Wine.findById(wine._id).populate('comments').exec()

        expect(newReview.comment).to.equal(comment)
        expect(updatedWine.comments).to.have.lengthOf(1)
        expect(updatedWine.comments[0].comment).to.equal(comment)
    })

    it('adds a second review to a wine and verifies both reviews are correctly added', async () => {
        const user1 = await User.create({ name: 'Rafaela Machado', email: 'rafa@mac.com', password: '123rafa123' })
        const user2 = await User.create({  name: 'Carol Machado', email: 'carol@mac.com', password: '123carol123' })
        const wine = await Wine.create({ title: 'Domaine de la Romanée-Conti', description: 'An exquisite and rare wine', type: 'red', price: 30 })

        const comment1 = 'Exceptional wine!'
        await logic.addNewReview(user1._id.toString(), wine._id.toString(), encodeURIComponent(comment1))

        const comment2 = 'This one is not my favourite'
        const newReview2 = await logic.addNewReview(user2._id.toString(), wine._id.toString(), encodeURIComponent(comment2))

        const updatedWine = await Wine.findById(wine._id).populate('comments').exec()

        expect(newReview2.comment).to.equal(comment2)
        expect(updatedWine.comments).to.have.lengthOf(2)
        expect(updatedWine.comments[0].comment).to.equal(comment1)
        expect(updatedWine.comments[1].comment).to.equal(comment2)
    })

    it('throws an error when trying to add a review to a non-existent wine', async () => {
        const user = await User.create({ name: 'Charlie Brown', email: 'charlie@brown.com', password: 'charliepassword' })
        const nonExistentWineId = new ObjectId().toString()
        const comment = 'Good wine but too pricey!'

        try {
            await logic.addNewReview(user._id.toString(), nonExistentWineId, encodeURIComponent(comment))
            throw new Error('Expected error was not thrown')
        } catch (error) {
            expect(error).to.be.instanceOf(SystemError)
            expect(error.message).to.equal('Error adding review: Wine not found')
        }
    })

    after(() => mongoose.disconnect())
})