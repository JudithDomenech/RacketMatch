const { models: { Racket } } = require('data')
const { validators: { validateString, validateId } } = require('commons')

function searchUserRackets(userId, type, weight, player, level) {
    
    validateId(userId, 'user id') 
    validateString(type, 'type')   
    validateString(weight, 'weigth')
    validateString(player, 'player')
    validateString(level, 'level')

    const TYPE_REGEX = new RegExp(type, "i")
    const WEIGHT_REGEX = new RegExp(weight, 'i')
    const PLAYER_REGEX = new RegExp(player, "i")
    const LEVEL_REGEX = new RegExp(level, "i")

    return Racket.find({
        // ...guarda los objetos creando un objeto más grande y creando de ellos una propiedad en función de si existe o no existe.
        ...(type && { type: TYPE_REGEX }),
        ...(weight && { weight: WEIGHT_REGEX }),
        ...(player && { player: PLAYER_REGEX }),
        ...(level && { level: LEVEL_REGEX })
    }).lean().populate('brand')
        .then(rackets => {
            rackets.forEach(racket => {
                racket.id = racket._id.toString()

                delete racket.user
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

module.exports = searchUserRackets

// find por los campos que queiras buscar y siempre debe dar un resultado
// ejemplo find({player, level, type, weight})