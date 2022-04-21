import './ListFavoritesRackets.sass'
import { useState, useEffect } from 'react'
import { listFavoritesRackets } from '../logic'
import { RacketsCard } from '.'

export function ListFavoritesRackets({ goToDetails,  validateToken}) {
    const [favorites, setFavorites] = useState([])

    useEffect(async () => {
        try {
            const favorites = await listFavoritesRackets(sessionStorage.token)
            favorites.forEach(favorite => favorite.isFavorite = true)
            setFavorites(favorites)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const updateFavoritesList = async () => {
        const favorites = await listFavoritesRackets(sessionStorage.token)
        favorites.forEach(favorite => favorite.isFav = true)

        setFavorites(favorites)
    }

    return <>
        {!!favorites.length &&
            <ul>
                {favorites.map(favorite =>
                    <li key={favorite.id}>
                        <RacketsCard racket={favorite} onRacket={goToDetails} onToggled={updateFavoritesList} validateToken={validateToken}/>
                    </li>)}
            </ul>
        }
    </>

}
