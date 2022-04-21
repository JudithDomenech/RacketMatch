const { retrieveRacket } = require('logic')

module.exports = (req, res) => {
    try {   
        const { params: { racketId } } = req

        retrieveRacket(racketId)
            .then(racket => res.json(racket))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}