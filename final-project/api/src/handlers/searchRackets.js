const { searchRackets } = require('logic')

module.exports = (req, res) => {

    try {
        const { query: { query } } = req

       searchRackets(query)
        .then(results => res.json(results))
        .catch(error => res.status(400).json({ error: error.message }))
} catch (error) {
    res.status(400).json({ error: error.message })
}

}

