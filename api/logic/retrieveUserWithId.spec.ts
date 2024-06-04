// @ts-nocheck
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { User } from '../data/index.ts'
import logic from './index.ts'
import { expect } from 'chai'
import { errors } from 'com'

dotenv.config()

const { Types: { ObjectId } } = mongoose
const { NotFoundError} = errors

describe('retrieveUserWithId', () => {
    before(() => mongoose.connect(process.env.MONGODB_TEST_URL))

    it('retrieves the target user details when both user and target user exist', () =>
        Promise.all([
            User.deleteMany(),
        ])
        .then(() =>
            Promise.all([
                User.create({ name: 'Carol Machado', email: 'carol@mac.com', password: '123carol123'  }),
                User.create({ name: 'Rafaela Machado', email: 'rafa@mac.com', password: '123rafa123' })
            ])
            .then(([user, targetUser]) =>
                logic.retrieveUserWithId(user._id.toString(), targetUser._id.toString())
                .then(userDetails => {
                    expect(userDetails).to.be.an('object')
                    expect(userDetails.name).to.equal('Rafaela Machado')
                    expect(userDetails.email).to.equal('rafa@mac.com')
                    expect(userDetails.userId).to.equal(targetUser._id.toString())
                })
            )
        )
    )

    it('retrieves the user own details when userId and targetUserId are the same', () =>
        Promise.all([
            User.deleteMany(),
        ])
        .then(() =>
            User.create({ name: 'Rafaela Machado', email: 'rafa@mac.com', password: '123rafa123' })
            .then(user =>
                logic.retrieveUserWithId(user._id.toString(), user._id.toString())
                .then(userDetails => {
                    expect(userDetails).to.be.an('object')
                    expect(userDetails.name).to.equal('Rafaela Machado')
                    expect(userDetails.email).to.equal('rafa@mac.com')
                    expect(userDetails.userId).to.equal(user._id.toString())
                })
            )
        )
    )

    it('throws an error when the user does not exist', () =>
        Promise.all([
            User.deleteMany(),
        ])
        .then(() =>
            User.create({ name: 'Target User', email: 'targetuser@example.com', password: 'password123' })
            .then(targetUser => {
                const nonExistentUserId = new ObjectId().toString()
                return logic.retrieveUserWithId(nonExistentUserId, targetUser._id.toString())
                .then(
                    () => { throw new Error('Expected error was not thrown') },
                    error => {
                        expect(error).to.be.instanceOf(NotFoundError)
                        expect(error.message).to.equal('user not found')
                    }
                )
            })
        )
    )

    after(() => mongoose.disconnect())
})