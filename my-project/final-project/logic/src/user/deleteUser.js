const { models: { User, Comment } } = require('data')
const { validators: { validateId, validatePassword } } = require('commons')

function deleteUser(userId, password) {
    validateId(userId)
    validatePassword(password)

    return User.findOne({ _id: userId, password }).lean()
    .then(user => {
        if(!user) throw Error(`wrong credentials`)
        return Comment.deleteMany({ user: userId })
    })
    .then(result => {
        return User.deleteOne({ _id: userId, password })
    })
    .then(result => {
        if (result.deletedCount === 0) throw new Error(`user can't be deleted`)
    })
}

module.exports = deleteUser
