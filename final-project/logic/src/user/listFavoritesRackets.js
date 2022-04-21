const { models: { User } } = require('data')
const { validators: { validateId } } = require('commons')

function listFavoritesRackets(userId) {
    validateId(userId, 'user Id')

    return User.findById(userId).populate('favorites')
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} does not exist`)

            return Promise.all(user.favorites.map(favorite => favorite.populate('brand')))
        })
        .then(favorites => favorites.map((_favorite => {
            const favorite = _favorite._doc
            favorite.id = favorite._id.toString()

            favorite.brand.id = favorite.brand._id.toString()
            favorite.brand = favorite.brand.name

            delete favorite._id
            delete favorite.brand._id
            delete favorite.__v
            delete favorite.description
            delete favorite.nivel
            delete favorite.player

            return favorite
        })
        ))
}

module.exports = listFavoritesRackets