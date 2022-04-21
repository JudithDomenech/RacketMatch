import './RacketsCard.sass'
import { ToggleFavoriteRackets } from '.'

export function RacketsCard({ racket, onRacket, onToggled, validateToken }) {

    return <div className='racket-card'>

        <img onClick={()=> onRacket(racket.id)} src={racket.image} alt='racket'/>
        <div>
            <h3 className='racket-card__brand'>{racket.brand}</h3>
            <p className='racket-card__model'>{racket.model}</p>
            <p className='racket-card__price'>{racket.price}€</p>
        </div>
        <div className='racket-card__toggle-favorite'>
            {validateToken() && <ToggleFavoriteRackets racketId={racket.id} isFavorite={racket.isFavorite} onToggled={onToggled}/>}
        </div>
    </div>
}



