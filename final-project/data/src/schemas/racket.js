const { Schema } = require('mongoose')
const { Types: { ObjectId } } = Schema

const racket = new Schema({
    brand: {
        type: ObjectId,
        ref: 'Brand',
        required: true
    },

    model: {
        type: String,
        required: true
    },

    weight: {
        type: String,
        required: true,
        enum: ['345-350g', '350-360g', '360-370g']
    },

    type: {
        type: String,
        required: true,
        enum: ['Control', 'Potencia', 'Hybrida']
    },

    player: {
        type: String,
        required: true,
        enum: ['Ofensivo', 'Defensivo']
    },

    price: {
        type: Number,
        required: true
    },

    level: {
        type: String,
        required: true,
        enum: ['Principiante', 'Intermedio', 'Avanzado']
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    }
})

module.exports = racket