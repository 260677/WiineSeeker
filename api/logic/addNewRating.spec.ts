//@ts-nocheck
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { User, Wine, Market } from '../data/index.ts'
import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { Types: { ObjectId } } = mongoose
const { SystemError } = errors

describe('addNewRating', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    beforeEach(() => 
        Promise.all([
            User.deleteMany(),
            Wine.deleteMany(),
            Market.deleteMany(),
        ])
    )

    it('adds a new rating of 5 to a wine that already had a rating of 4, resulting in a new average rating of 4.5', async () => {
        const user = await User.create({ name: 'Carol Machado', email: 'carol@mac.com', password: '123carol123' })
        
        const wine1 = await Wine.create({ image: `https://images2.imgbox.com/dd/94/DpvEjiXU_o.png`, title: 'Raimat Clamor', description: 'Young and fresh, typically from Costers del Segre, cherry notes', type: 'red', price: 6.45, rates: [4], averageRating: 4 });

        const market1 = await Market.create({ title: 'Condis Taulat', address: 'Calle Taulat, 185', location: { type: 'Point', coordinates: [41.4020559, 2.2041401] }, wines: [wine1._id] });
        const market2 = await Market.create({ title: 'Condis Entença', address: 'Calle Entença, 85', location: { type: 'Point', coordinates: [41.3794426, 2.1322796] }, wines: [wine1._id] })


        console.log('new ID:', wine1._id)
        const newAverageRating = await logic.addNewRating(wine1._id.toString(), 5)

        const updatedWine = await Wine.findById(wine1._id).lean().exec()
        
       
        expect(updatedWine.averageRating).to.equal(4.5)
        expect(updatedWine.rates).to.include(5)
    })

    it('adds a new rating of 3 to a wine that already had ratings of 4, 5, and 3, resulting in a new average rating of 3.8', async () => {
        const user = await User.create({ name: 'Carol Machado', email: 'carol@mac.com', password: '123carol123' })
        
        const wine2 = await Wine.create({ image: `https://images2.imgbox.com/dd/94/DpvEjiXU_o.png`, title: 'Another Wine', description: 'A description of another wine', type: 'white', price: 12.95, rates: [4, 5, 3], averageRating: 4 })

        const market3 = await Market.create({ title: 'Market One', address: 'Market Address 1', location: { type: 'Point', coordinates: [41.4020559, 2.2041401] }, wines: [wine2._id] });
        const market4 = await Market.create({ title: 'Market Two', address: 'Market Address 2', location: { type: 'Point', coordinates: [41.4020559, 2.2041401] }, wines: [wine2._id] })

        const newAverageRating = await logic.addNewRating(wine2._id.toString(), 3)

        const updatedWine = await Wine.findById(wine2._id).lean().exec()
        
       
        expect(updatedWine.averageRating).to.equal(3.8)
        expect(updatedWine.rates).to.include(3)
    })

    it('throws an error when trying to add a rating to a non-existent wine', async () => {
        const nonExistentWineId = new ObjectId().toString()

        try {
            await logic.addNewRating(nonExistentWineId, 5)
            throw new Error('Expected error was not thrown')
        } catch (error) {
            expect(error).to.be.instanceOf(SystemError)
            expect(error.message).to.equal('Error updating rating: Wine not found')
        }
    })

    after(() => mongoose.disconnect())
})