import './SearchUserRacketForm.sass'
import { data } from 'commons'
import { Button, Select } from '.'

const { RacketType, RacketWeight, RacketPlayer, PlayerLevel } = data

export function SearchUserRacketForm({ onSearchUserRacket }) {

    const search = event => {
        event.preventDefault()

        const type = event.target.type.value
        const weight = event.target.weight.value
        const player = event.target.player.value
        const level = event.target.level.value

        onSearchUserRacket({type, weight, player, level})
    }

    return <>
        <form className='search-user-racket' onSubmit={search}>
            <ul className='search-user-racket__list'>
                <li> <Select options={RacketType} name="type" placeholder="Todos" label="¿Que tipo de pala quieres?"></Select> </li>
                <li> <Select options={RacketWeight} name="weight" placeholder="Todos" label="¿Que peso ha de tener?"></Select> </li>
                <li> <Select options={RacketPlayer} name="player" placeholder="Todos" label="¿Que tipo de jugador eres?"></Select> </li>
                <li> <Select options={PlayerLevel} name="level" placeholder="Todos" label="¿Que nivel tienes?"></Select> </li>
                <li> <Button className='search-user-racket__button' type='submit' /></li>
            </ul>
        </form>
    </>
}