const { models: { Racket } } = require('data')
const { validators: { validateId } } = require('commons')

function retriveRackets(racketId) {
    validateId(racketId)

    return Racket.findById(racketId).lean().populate('brand')
        .then(racket => {
            if (!racket) throw new Error(`racket with id ${racketId} does not exist`)

            racket.id = racket._id.toString()
            
            delete racket._id
            delete racket.__v

            racket.brand = racket.brand.name

            return racket
        })
}

module.exports = retriveRackets