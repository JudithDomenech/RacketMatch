import './Logo.sass';
import logo from '../../assets/racketMatch.png'


export function Logo({ className = '' }) {
    return <>
        <figure className={`${className}`} >
            <img src={logo} alt="logo racketMatch"></img>
        </figure>

    </>
}

