import './ListSearchUserRacket.sass'
import { useEffect, useState } from 'react'
import { RacketsCard } from '.'
import { searchUserRackets, listFavoritesRackets } from '../logic'
import { useSearchParams } from 'react-router-dom'

export function ListSearchUserRacket({ onRacket, validateToken }) {
    const [rackets, setRackets] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const type = searchParams.get('type')
    const weight = searchParams.get('weight')
    const player = searchParams.get('player')
    const level = searchParams.get('level')


    useEffect(async () => {
        try {

            const rackets = await searchUserRackets(sessionStorage.token, type, weight, player, level)
            const favorites = await listFavoritesRackets(sessionStorage.token)
            rackets.forEach(racket => {
                racket.isFavorite = favorites.some(favorite => favorite.id === racket.id)
            })
            setRackets(rackets)

        } catch (error) {
            alert(error.message)
        }
    }, [type, weight, player, level])

    return <>
        {!!rackets.length &&
            <ul>
                {rackets.map(racket =>
                    <li key={racket.id}>
                        <RacketsCard racket={racket} onRacket={onRacket} validateToken={validateToken}/>
                    </li>)}
            </ul>
        }
    </>
}