import './Register.sass'
import { Logo, RegisterForm } from '../components'

export const Register = ({ onRegistered, onLogin }) => {

    const goToLogin = event => {
        onRegistered && onRegistered(event)
        onLogin && onLogin()
    }

    return <div className='register'>
        <div className='register__container'>
                <Logo />
                <RegisterForm onRegistered={goToLogin} onLogin={goToLogin} />
        </div>
    </div>
}