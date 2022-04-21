import './Favorites.sass'
import { ListFavoritesRackets } from '../components'

export function Favorites({ goToDetails, validateToken }) {


    return <div className='favorites-container'>
        <h1>TUS FAVORITOS</h1>
        <ListFavoritesRackets goToDetails={goToDetails} validateToken={validateToken}/>

    </div>


}
