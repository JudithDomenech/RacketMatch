import './ListSearchRackets.sass'
import { RacketIcon, RacketsCard } from '.'
import { searchRackets, listFavoritesRackets } from '../logic'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export function ListSearchRackets({ goToDetails, validateToken }) {
    const [rackets, setRackets] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const query = searchParams.get('query')

    useEffect(async () => {
        try {

            const rackets = await searchRackets(query)
            let favorites = []
            

            if (validateToken()) {
                favorites = await listFavoritesRackets(sessionStorage.token)
            }

            rackets.forEach(racket => {
                racket.isFavorite = favorites.some(favorite => favorite.id === racket.id)
            })

            setRackets(rackets)

        } catch (error) {
            alert(error.message)
        }
    }, [query])

    return <div className='results__list'>
        {!!rackets.length ?
            <ul>
                {rackets.map(racket =>
                    <li key={racket.id} className="results__item" >
                        <RacketsCard racketId={racket.id} isFavorite={racket.isFavorite} racket={racket} onRacket={goToDetails} validateToken={validateToken} />
                    </li>)}
            </ul>
        :  <RacketIcon className='search__racket-icon'/>}
    </div>
}