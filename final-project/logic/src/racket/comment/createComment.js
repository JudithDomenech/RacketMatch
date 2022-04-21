const { validators: { validateId, validateString } } = require('commons')
const { models: { Comment, User, Racket } } = require('data')
const { racket } = require('data/src/schemas')

function createCommnent(userId, racketId, text) {
    validateId(userId)
    validateId(racketId)
    validateString(text, 'text')

    return Promise.all([
        User.findById(userId).lean(),
        Racket.findById(racketId).lean()
    ])
        .then(([user, racket]) => {
            if (!user) throw new Error(`user with id ${userId} does not exist`)
            if (!racket) throw new Error(`racket with id ${racketId} does not exist`)
            
            return Comment.create({ user: userId, racket: racketId, text })
        })

        .then(comment => comment.id)
}

module.exports = createCommnent