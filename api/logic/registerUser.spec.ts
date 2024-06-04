// @ts-nocheck
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { User } from '../data/index.ts'
import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { DuplicityError } = errors

describe('registerUser', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('succeeds a new user', () =>
        User.deleteMany()
            .then(() => logic.registerUser('Carol Mac', 'carol@mac.com', '123carol123'))
            .then(() => User.findOne({ email: 'carol@mac.com' }))
            .then(user => {
                expect(!!user).to.be.true
                expect(user.name).to.equal('Carol Mac')
                expect(user.email).to.equal('carol@mac.com')
                expect(user.password).to.equal('123carol123')
            })
    )

    it('fails on existing users', () =>
        User.deleteMany()
            .then(() => User.create({ name: 'Carol Mac', email: 'carol@mac.com', password: '123carol123' }))
            .then(() =>
                logic.registerUser('Carol Mac', 'carol@mac.com', '123carol123')
                    .catch(error => {
                        expect(error).to.be.instanceOf(DuplicityError)
                        expect(error.message).to.equal('user already exists')
                    })
            )
    )

    it('fails on non string name', () => {
        let errorThrown

        try {
            // @ts-ignore
            logic.registerUser(123, 'carol@mac.com', '123carol123')
        } catch (error) {
            errorThrown = error
        }

        expect(errorThrown).to.be.instanceOf(TypeError)
        expect(errorThrown.message).to.equal('name 123 is not a string')
    })

    it('fails on empty name', () => {
        let errorThrown

        try {
            logic.registerUser('', 'carol@mac.com', '123carol123')
        } catch (error) {
            errorThrown = error
        }

        expect(errorThrown).to.be.instanceOf(Error)
        expect(errorThrown.message).to.equal('name >< is empty or blank')
    })

   
})