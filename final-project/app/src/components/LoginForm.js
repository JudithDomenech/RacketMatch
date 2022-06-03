import './LoginForm.sass'
import React, { useState } from 'react'
import { authenticateUser } from '../logic'
import { Button, Link, Input } from '.'

export function LoginForm({ onLoggedIn, onRegister }) {

    const [emailFeedback, setEmailFeedback] = useState()
    const [passwordFeedback, setPasswordFeedback] = useState()
    const [feedback, setFeedback] = useState()

    const login = async event => {
        try {
            const { target: { email: { value: email }, password: { value: password } } } = event

            const token = await authenticateUser(email, password)
            sessionStorage.token = token

            onLoggedIn()
            setFeedback()

            if (message.includes('email')) {
                setPasswordFeedback()
                setEmailFeedback(message)
            } else if (message.includes('password')) {
                setEmailFeedback()
                setPasswordFeedback(message)
            }

        } catch (error) {
            alert(error.message)
        }
    }

    const onSubmit = event => {
        event.preventDefault()
        login(event)
    }

    const clearPasswordFeedback = () => setPasswordFeedback()

    const clearEmailFeedback = () => setEmailFeedback()

    return <form className='login__wrapper' onSubmit={onSubmit}>
        <Input className='login__input' type='email' feedback={emailFeedback} onFocus={clearEmailFeedback} name='email' placeholder='Email' required={true} />
        <Password className='login__input' type='password' feedback={passwordFeedback} onFocus={clearPasswordFeedback} name='password' placeholder='Contraseña' required={true} />
        <Button className='login__button' type='submit'> Login </Button>
        {feedback && <Feedback message={feedback} level="error" />}
        <Link href="" onClick={onRegister}> Registrarse</Link>
    </form>
}

