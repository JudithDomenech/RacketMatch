import './SearchUserRacket.sass'
import { SearchUserRacketForm, ListSearchUserRacket } from '../components'

export function SearchUserRacket({ onSearchUserRacket, onRacket, validateToken}) {
    return <div className='search-user-racket__container'>
        <h1>BUSCA TU PALA</h1>
        <SearchUserRacketForm onSearchUserRacket={onSearchUserRacket} />
        <ListSearchUserRacket onRacket={onRacket} validateToken={validateToken}/>
    </div>


}
