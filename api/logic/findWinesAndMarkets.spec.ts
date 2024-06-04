//@ts-nocheck
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { User, Wine, Market } from '../data/index.ts'
import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { Types: { ObjectId } } = mongoose
const { NotFoundError } = errors


describe('findWinesAndMarkets', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('finds all the red wines in a collection of 2 reds and 1 white wine within specified proximity', () =>
        Promise.all([
            User.deleteMany(),
            Wine.deleteMany(),
            Market.deleteMany(),
        ])
        .then(() =>
            User.create({ name: 'Carol Machado', email: 'carol@mac.com', password: '123carol123' })
            .then(user =>
                Promise.all([
                    Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'Albariño Trás Montes', description: 'lemon, peach and jasmine notes', type: 'white', price: 7 }),
                    Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'Jasmim Red', description: 'pure jasmine, 6 months barrica', type: 'red', price: 9 }),
                    Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'Red Tres Joli', description: 'french wine, 2 years roble, woody, dry', type: 'red', price: 12 }),
                ])
                .then(([wine1, wine2, wine3]) =>
                    Promise.all([
                        Market.create({ title: 'Mercadona', address: 'Calle Veneçuela, 139', location: { type: 'Point', coordinates: [41.4137638, 2.2032487] }, wines: [wine1._id, wine2._id, wine3._id] }),
                        Market.create({ title: 'Mercadona', address: 'Calle Calabria, 129', location: { type: 'Point', coordinates: [41.3809, 2.1532] }, wines: [wine1._id, wine2._id, wine3._id] }),
                        Market.create({ title: 'Mercadona', address: 'Gran Via de les Corts Catalanes, 373', location: { type: 'Point', coordinates: [41.3763, 2.1498] }, wines: [wine1._id, wine2._id, wine3._id] }),
                    ])
                    .then(([market1, market2, market3]) => {
                        console.log('Markets created:', market1, market2, market3)
                        debugger
                        return logic.findWinesAndMarkets(user.id, [41.3795558, 2.1535018], 1000, 3, 15, 'red')
                    })
                    .then(({ markets, wines }) => {
                        console.log('Wines found:', wines)
                        console.log('Markets found:', markets)
                     
                        expect(wines).to.be.an('array')
                      
                        expect(wines).to.have.lengthOf(2)
                        console.log(wine1.id)
                        
                        console.log({ markets, wines })
                    })
                )
            )
        )
    )
    it('finds all the red wines in between 5 and 10 euros', () =>
    Promise.all([
        User.deleteMany(),
        Wine.deleteMany(),
        Market.deleteMany(),
    ])
    .then(() =>
        User.create({ name: 'Carol Machado', email: 'carol@mac.com', password: '123carol123' })
        .then(user =>
            Promise.all([
                Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'Albariño Trás Montes', description: 'lemon, peach and jasmine notes', type: 'white', price: 7 }),
                Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'Jasmim Red', description: 'pure jasmine, 6 months barrica', type: 'red', price: 9 }),
                Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'Red Tres Joli', description: 'french wine, 2 years roble, woody, dry', type: 'red', price: 12 }),
            ])
            .then(([wine1, wine2, wine3]) =>
                Promise.all([
                    Market.create({ title: 'Mercadona', address: 'Calle Calabria, 129', location: { type: 'Point', coordinates: [41.38091, 2.0811182] }, wines: [wine1._id, wine2._id, wine3._id] }),
                    Market.create({ title: 'Mercadona', address: 'Gran Via de les Corts Catalanes, 373', location: { type: 'Point', coordinates: [41.38091, 2.0811182] }, wines: [wine1._id, wine2._id, wine3._id] }),
                ])
                .then(([market1, market2]) => {
                    console.log('Markets created:', market1, market2)
                    return logic.findWinesAndMarkets(user.id, [41.38091, 2.0811182], 500, 5, 10, 'red') 
                    })
                    .then(({ markets, wines }) => {
                        console.log('Wines found 2.case:', wines)
                        console.log('Markets found 3.case:', markets)
                    
                        expect(wines).to.be.an('array')
                    
                        expect(wines).to.have.lengthOf(1)
                    })
                )
            )
        )
    )

    it('finds the white wine called "Albariño Trás Montes", in between 6 and 8 euros, in Mercadona Calabria', () =>
        Promise.all([
            User.deleteMany(),
            Wine.deleteMany(),
            Market.deleteMany(),
        ])
            .then(() =>
                User.create({ name: 'Carol Machado', email: 'carol@mac.com', password: '123carol123' })
                    .then(user =>
                        Promise.all([
                            Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'Albariño Trás Montes', description: 'lemon, peach and jasmine notes', type: 'white', price: 7 }),
                            Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'Jasmim Red', description: 'pure jasmine, 6 months barrica', type: 'red', price: 9 }),
                            Wine.create({ image: `https://imgbox.com/tFemqCFN`, title: 'Red Tres Joli', description: 'french wine, 2 years roble, woody, dry', type: 'red', price: 12 }),
                        ])
                            .then(([wine1, wine2, wine3]) =>
                                Promise.all([
                                    Market.create({ title: 'Mercadona', address: 'Calle Calabria, 129', location: { type: 'Point', coordinates: [41.38091, 2.0811182] }, wines: [wine1._id, wine2._id, wine3._id] }),
                                    Market.create({ title: 'Mercadona', address: 'Gran Via de les Corts Catalanes, 373', location: { type: 'Point', coordinates: [41.38091, 2.0811182] }, wines: [wine1._id, wine2._id, wine3._id] }),
                                ])
                                .then(([market1, market2]) => {
                                    console.log('Markets created:', market1, market2)
                                    return logic.findWinesAndMarkets(user.id, [41.38091, 2.0811182], 500, 6, 8, 'white') 
                                    })
                                    .then(({ markets, wines }) => {
                                        console.log('Wines found 3.case:', wines)
                                        console.log('Markets found 3.case:', markets)
                                        
                                    
                                        expect(wines).to.be.an('array')
                                        expect(wines).to.have.lengthOf(1)
                                
                                        expect(wines[0].title).to.equal('Albariño Trás Montes') 
                                    })
                                )
                            )
                        )
                    )
                    it('throws an error when the user does not exist', () =>
                    Promise.all([
                        User.deleteMany(),
                        Wine.deleteMany(),
                        Market.deleteMany(),
                    ])
                        .then(() => {
                            const nonExistentUserId = new ObjectId().toString()
                            return logic.findWinesAndMarkets(nonExistentUserId, [41.38091, 2.0811182], 500, 5, 10, 'red')
                                .then(
                                    () => { throw new Error('Expected error was not thrown') },
                                    error => {
                                        expect(error).to.be.instanceOf(NotFoundError)
                                        expect(error.message).to.equal('User not found')
                                    }
                                )
                        })
                )
                
    after(() => mongoose.disconnect())
})