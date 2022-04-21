const { models: { Racket } } = require('data')
const { validators: { validateString } } = require('commons')

function searchRackets(query=null) {
 
    if(query) validateString(query, 'query')

    if (query === null) return new Promise(resolve => resolve([]))

    const QUERY_REGEX = new RegExp(query, 'i')

    return Racket.find().lean().populate('brand')
        .then(rackets => {

            rackets = rackets.filter(racket =>
                QUERY_REGEX.test(racket.brand.name) ||
                QUERY_REGEX.test(racket.model) ||
                QUERY_REGEX.test(racket.type) ||
                QUERY_REGEX.test(racket.player) ||
                QUERY_REGEX.test(racket.level)
                
            )

            rackets.forEach(racket => {
                racket.id = racket._id.toString()

                delete racket._id
                delete racket.__v

                racket.brand = racket.brand.name

                /* racket.brand.id = racket.brand._id.toString() */

                delete racket.brand._id
                delete racket.brand.__v

            })

            return rackets
        })
}

module.exports = searchRackets