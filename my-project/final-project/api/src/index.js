require('dotenv').config()
const { mongoose: { connect, disconnect } } = require('data')
const express = require('express')
const {
    registerUser,
    authenticateUser,
    retrieveUser,
    updateUser,
    updatePassword,
    deleteUser,
    createComment,
    listComments,
    deleteComment,
    toggleFavoriteRacket,
    listFavoritesRackets,
    searchRackets,
    retrieveRacket,
    searchUserRackets
} = require('./handlers')

const cors = require('cors')
const { env: { PORT, MONGODB_URL } } = process

connect(MONGODB_URL)
    .then(() => console.log('db connected'))
    .then(() => {
        const server = express()

        server.use(cors())

        const jsonBodyParser = express.json()

        const api = express.Router()

        api.post('/users', jsonBodyParser, registerUser)
        api.post('/users/auth', jsonBodyParser, authenticateUser)
        api.get('/users', retrieveUser)
        api.patch('/users', jsonBodyParser, updateUser)
        api.patch('/users/change-password', jsonBodyParser, updatePassword)
        api.delete('/users', jsonBodyParser, deleteUser)

        api.get('/rackets/favorites', listFavoritesRackets)
        api.patch('/rackets/:racketId/favorites', jsonBodyParser, toggleFavoriteRacket)
        api.get('/rackets', searchRackets)
        api.get('/rackets/search', searchUserRackets)
        api.get('/rackets/:racketId', retrieveRacket)

        api.post('/comments/:racketId', jsonBodyParser, createComment)
        api.get('/comments/:racketId', listComments)
        api.delete('/comments/:commentId', deleteComment)

        server.use('/api', api)

        server.listen(PORT, () => console.log('server started'))
    })
