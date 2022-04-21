import './ToggleFavoriteRackets.sass'
import { useState, useEffect } from 'react'
import { toggleFavoriteRacket } from '../../../logic'
import { FavoriteIcon } from '../../icons'
import { Button } from '.'


export function ToggleFavoriteRackets({ racketId, isFavorite = false, onToggled }) {
    const [favorite, setFavorite] = useState(isFavorite)
/* 
    useEffect(() => {

        setFavorite(isFavorite)

    }, [isFavorite]) */

    const toggleFavorite = async () => {
      
        try {

            await toggleFavoriteRacket(sessionStorage.token, racketId)
            setFavorite(!favorite)
            onToggled && onToggled()
        } catch (error) {
            alert(error.message)
        }
    }

    const onToggle = event => {
        event.preventDefault()
        toggleFavorite()
    }

    return <>
        <Button type='button' onClick={onToggle}>
            <FavoriteIcon className={`${favorite ? 'favorite-on' : 'favorite-off'}`}/>
        </Button>
    </>
}
