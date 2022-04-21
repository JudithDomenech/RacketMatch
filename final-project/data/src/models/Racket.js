const { model  } = require('mongoose')
const { racket } = require('../schemas')

const Racket = model('Racket', racket )

module.exports = Racket