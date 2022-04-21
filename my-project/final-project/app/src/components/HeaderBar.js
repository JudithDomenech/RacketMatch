import { Logo, Link } from '.'
import './HeaderBar.sass'

export function HeaderBar({ onLogin, onHome, validateToken }) {


    return <div>
        <nav className='header-bar'>
            <Link onClick={onHome}><Logo /></Link>
            {!validateToken() && <Link onClick={onLogin}>Iniciar Sesión</Link>}
        </nav>
    </div>
}