const { listComments } = require('logic')

module.exports = (req, res) => {
    try {
        const { params: { racketId } } = req

        listComments(racketId)
            .then(comments => res.json(comments))
            .catch(error => res.status(400).json({ error: error.message }))
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}