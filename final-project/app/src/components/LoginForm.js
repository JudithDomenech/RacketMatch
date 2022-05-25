import './LoginForm.sass'
import { authenticateUser } from '../logic'
import { Button, Link, Input } from '.'

export function LoginForm({ onLoggedIn, onRegister }) {

    const login = async event => {
        try {
            const { target: { email: { value: email }, password: { value: password } } } = event

            const token = await authenticateUser(email, password)
            sessionStorage.token = token
            
            onLoggedIn()
            
        } catch (error) {
            alert(error.message)
        }
    }

    const onSubmit = event => {
        event.preventDefault()
        login(event)
    }

    return <form className='login__wrapper' onSubmit={onSubmit}>
            <Input className='login__input'type='email' name='email' placeholder='Email' required={true} />
            <Password className='login__input' type='password' feedback={passwordFeedback} onFocus={clearPasswordFeedback} name='password' placeholder='Contraseña' required={true} />
            <Button className='login__button'type='submit'> Login </Button>
            <Link href="" onClick={onRegister}> Registrarse</Link>     
    </form>
}

