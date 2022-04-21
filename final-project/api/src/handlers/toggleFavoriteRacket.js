const { toggleFavoriteRacket } = require("logic")
const { verifyTokenAndGetUserId } = require('../helpers')

module.exports = (req, res) => {
    try {

        const userId = verifyTokenAndGetUserId(req)
        const { params: { racketId } } = req

        toggleFavoriteRacket(userId, racketId)
            .then(comments => res.json(comments))
            .catch(({ message }) => res.status(400).json({ error: message }))
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }

}

