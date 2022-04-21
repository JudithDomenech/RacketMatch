const { models: { User, Racket } } = require('data')
const { validators: { validateId } } = require('commons')

function toggleFavoriteRacket(userId, racketId) {

    validateId(userId, 'userId')
    validateId(racketId, 'racketId')

    return Racket.findById(racketId).lean()
    .then(racket => {
        if(!racket) throw new Error(`user with id ${userId} does not exist`)
        return User.findById(userId)
    })
    .then(user => {
        if(!user) throw new Error(`user with id ${userId} does not exist`)
        
        const index = user.favorites.indexOf(racketId)

        if (index === -1) user.favorites.push(racketId)
        else user.favorites.splice(index, 1)

        return user.save()
    })
    .then(user => {})
}

module.exports = toggleFavoriteRacket

