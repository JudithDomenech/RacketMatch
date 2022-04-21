const { searchUserRackets } = require('logic')
const { verifyTokenAndGetUserId } = require("../helpers")

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)

        const { query: { type, weight, player, level } } = req

        searchUserRackets(userId, type, weight, player, level)
            .then(results => res.json(results))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}
