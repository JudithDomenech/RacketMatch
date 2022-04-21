import './NavigateMenu.sass'
import { Link, ProfileIcon, FavoriteIcon, RacketIcon, SearchIcon } from '.'

export function NavigateMenu({ onProfile, onFavorites, onSearchUserRacket, onHome }) {

    return <div className='navigate__container'>
        <nav className='navigate__menu'>
            <Link className='navigate__icon' onClick={onHome}><SearchIcon />Buscador </Link>
            <Link className='navigate__icon' onClick={onProfile}> <ProfileIcon />Perfil</Link>
            <Link className='navigate__icon' onClick={onFavorites}><FavoriteIcon />Favoritos</Link>
            <Link onClick={onSearchUserRacket}><RacketIcon className='navigate__icon-medium'/>Tu pala</Link>
        </nav>
    </div>
}