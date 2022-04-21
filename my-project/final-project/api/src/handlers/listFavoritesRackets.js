const { verifyTokenAndGetUserId } = require('../helpers')
const { listFavoritesRackets } = require('logic')

module.exports = (req, res) => {
    try {
        const userId = verifyTokenAndGetUserId(req)

        listFavoritesRackets(userId)
            .then(favorites => res.json(favorites))
            .catch(({ message }) => res.status(400).json({ error: message }))
    } catch ({ message }) {
        res.status(400).json({ error: message })
    }
}


// Responsabilidad de cada capa

// - la de hoja de rutas, ademas de tener la configuración del servidor sirve para
// configurar una dirección dentro del servidor node, la acción que se quiere realizar (verbo)
// y el handler que se quiere llamar

// - los handlers tienen la responsabilidad de capturar la entrada del paquete de datos del cliente (req)
// verificar el token del usuario si la ruta es privada, pasa correctamente los datos a la función logic,
// manejar los errores y siempre devolver una respuesta a nuestro cliente, ya sea una aceptación o el
// error correspondiente