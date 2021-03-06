const { verifyTokenAndGetUserId } = require('../helpers')
const { retrieveUser } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)

        retrieveUser(userId)
            .then(user => res.status(200).json(user))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

