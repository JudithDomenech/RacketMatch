import './RacketCardDetails.sass'
import { retrieveRacket } from '../logic'
import { ToggleFavoriteRackets } from '.'
import { useEffect, useState } from 'react'
import { listFavoritesRackets } from '../logic'

export function RacketCardDetails({ racketId }) {
    const [racket, setRacket] = useState({})


    useEffect(async () => {
        try {
            const racket = await retrieveRacket(racketId)
            
            if (sessionStorage.token) {
                const favorites = await listFavoritesRackets(sessionStorage.token)
                racket.isFavorite = favorites.some(favorite => favorite.id === racket.id)
            }
            setRacket(racket)

        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <div>
        {sessionStorage.token && <ToggleFavoriteRackets racketId={racket.id} isFavorite={racket.isFavorite} />}

        <ul>
            <li> <h1>{racket.brand}</h1> </li>
            <li> <img src={racket.image} /> </li>
            <li>
                <span>Modelo:</span>
                <p>{racket.model}</p>
            </li>
            <li>
                <span>Precio:</span>
                <p>{racket.price}€</p>
            </li>
            <li>
                <span>Descripción:</span>
                <p>{racket.description}</p>
            </li>
            <li>
                <span>Nivel:</span>
                <p>{racket.level}</p>
            </li>

            <li>
                <span>Tipo:</span>
                <p>{racket.type}</p>
            </li>

            <li>
                <span>Tipo de Jugador:</span>
                <p>{racket.player}</p>
            </li>

            <li>
                <span>Peso:</span><p>{racket.weight}</p>
            </li>
        </ul>

    </div>
}