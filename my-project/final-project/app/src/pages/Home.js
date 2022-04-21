import './Home.sass'
import { useNavigate } from 'react-router-dom'
import { ListSearchRackets, Search } from '../components'

export function Home({ onSearch, goToDetails, validateToken }) {

    const navigate = useNavigate()
    const showHome = () => navigate('/')

    return <div className='home'>
        
        <div className='home__search'>
            <Search onSearch={onSearch} onReset={showHome}/>
            <ListSearchRackets goToDetails={goToDetails} validateToken={validateToken}/>
        </div>
        
    </div>


}
