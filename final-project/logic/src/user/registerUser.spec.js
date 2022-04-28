require('dotenv').config()
const { expect } = require('chai')
const registerUser = require('./registerUser')
const { mongoose, models: { User } } = require('data')

describe('registerUser', () => {
    before(() =>
        mongoose.connect('mongodb://localhost:27017/racketMatch-db-test')
            .then(() => User.deleteMany({}))
    )

    describe('when user doesnt exist', () => { // happy path
        let name, email, password

        beforeEach(() => {
            name = `n${Math.random()}`
            email = `e${Math.random()}@mail.com`
            password = `p${Math.random()}`
        })

        it('should succeed on new user', () =>
            registerUser(name, email, password)
                .then(result => {

                    expect(result).to.be.undefined

                    return User.findOne({ email })
                })
                .then(user => {

                    expect(user).to.exist
                    expect(user.name).to.equal(name)
                    expect(user.email).to.equal(email)
                    expect(user.password).to.equal(password)
                })
        )
    })

    describe('when user already exists', () => { // unhappy path
        let name, email, password

        beforeEach(() => {
            name = `n${Math.random()}`
            email = `e${Math.random()}@mail.com`
            password = `p${Math.random()}`

            return User.create({ name, email, password })
        })

        it('should fail on trying to register user', () =>
            registerUser(name, email, password)
                .then(result => {
                    throw new Error('should not reach this point')
                })
                .catch(error => {

                    expect(error).to.exist
                    expect(error.message).to.equal('user already exists')
                })
        )
    })

    after(() =>
        User.deleteMany({})
            .then(() => mongoose.disconnect())
    )
})