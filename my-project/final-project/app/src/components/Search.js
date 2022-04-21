import './Search.sass'
import { Button, Input, SearchIcon, CancelIcon } from '.'

export function Search({ onSearch, onReset }) {

    const search = event => {
        event.preventDefault()

        const query = event.target.query.value
        onSearch(query)

    }

    return <div className="search">
        <form className="search__form" onSubmit={search}>
            <Input className="search__query-input" type="text" name="query" placeholder="Busca..." />   
            <Button type='submit'><SearchIcon className='search__button-icon'/></Button>
            <Button type='reset' onClick={onReset} ><CancelIcon className='clean__button-icon' /></Button>   
      
        </form>

    </div>
}
