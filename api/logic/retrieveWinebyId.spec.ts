//@ts-nocheck
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { Wine } from '../data/index.ts'
import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { NotFoundError, SystemError } = errors

describe('retrieveWineById', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    beforeEach(() => 
        Promise.all([
            Wine.deleteMany(),
        ])
    );

    it('retrieves a wine by its ID successfully', async () => {
        const wine = await Wine.create({ 
            image: `https://images2.imgbox.com/dd/94/DpvEjiXU_o.png`, 
            title: 'Raimat Clamor', 
            description: 'Young and fresh, typically from Costers del Segre, cherry notes', 
            type: 'red', 
            price: 6.45, 
            rates: [4, 5], 
            averageRating: 4.5 
        })

        const retrievedWine = await logic.retrieveWineById(wine._id.toString())

        expect(retrievedWine).to.have.property('image', wine.image)
        expect(retrievedWine).to.have.property('title', wine.title)
        expect(retrievedWine).to.have.property('description', wine.description)
        expect(retrievedWine).to.have.property('type', wine.type)
        expect(retrievedWine).to.have.property('price', wine.price)
        expect(retrievedWine).to.have.property('rates').that.includes(4, 5)
        expect(retrievedWine).to.have.property('averageRating', wine.averageRating)
    })

    it('throws a NotFoundError when the wine does not exist', async () => {
        const nonExistingId = new mongoose.Types.ObjectId().toString()

        try {
            await logic.retrieveWineById(nonExistingId)
            throw new Error('Test failed: expected NotFoundError')
        } catch (error) {
            expect(error).to.be.instanceOf(NotFoundError);
            expect(error.message).to.equal('Wine not found')
        }
    })

    it('throws a SystemError for other errors', async () => {
        const invalidId = 'invalid-id'

        try {
            await logic.retrieveWineById(invalidId)
            throw new Error('Test failed: expected SystemError')
        } catch (error) {
            expect(error).to.be.instanceOf(SystemError)
        }
    })

    after(() => mongoose.disconnect())
})