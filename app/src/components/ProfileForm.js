import './ProfileForm.sass'
import { retrieveUser, updateUser } from '../logic'
import { useState, useEffect } from 'react'
import { Button, Input } from '.'

export function ProfileForm({onUpdatePassword, onDeleteAccount, onLogOut}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect( () => {
        try {
            retrieveUser(sessionStorage.token)
                .then(({ name, email }) => {
                    setName(name)
                    setEmail(email)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const updateProfile = async event => {
        event.preventDefault()
        const { target: { name: { value: name }, email: { value: email } } } = event
        
        try {
            
           await updateUser(sessionStorage.token, name, email)
                    setName(name)
                    setEmail(email)
        } catch ({ message }) {
            alert({ message })
        }
    }


    return <form className='profile__form' onSubmit={updateProfile} method='post'>
            <Input className="profile__input" type="text" name="name" placeholder="name" defaultValue={name} label="Nombre"/>
            <Input className="profile__input" type="email" name="email" placeholder="e-mail" defaultValue={email} label="E-mail" />
            <Button className='profile__button' type ='submit'>Editar</Button>
        </form>
}
