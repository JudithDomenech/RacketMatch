import './Login.sass'
import { Logo, LoginForm } from '../components'

export const Login = ({ onRegister, onLoggedIn }) => {


    return <div className='login'>
        <div className='login__container'>
                <Logo />
                <LoginForm onRegister={onRegister} onLoggedIn={onLoggedIn} />
        </div>
    </div>
}