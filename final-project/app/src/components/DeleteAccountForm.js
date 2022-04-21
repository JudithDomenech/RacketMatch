import './DeleteAccountForm.sass'
import { Input, Button } from '.'
import { deleteUser } from '../logic'

export const DeleteAccountForm = ({ className = '', onDeleted,  }) => {

    const deleteAccount = async event => {
        try {
            const { target: { password: { value: password } } } = event

            await deleteUser(sessionStorage.token, password)
            delete sessionStorage.token
             onDeleted()
            alert('Cuenta eliminada, vuelve pronto')

        } catch (error) {
            alert(error.message)
        }
    }

    const onSubmit = event => {
        event.preventDefault()
        deleteAccount(event)
    }

    return <div className='delete-account__container'>
        <form className={className} onSubmit={onSubmit}>
            <Input className='delete-account__input' type='password' name='password' placeholder='Contraseña' required />
            <Button className='delete-account__button' type='submit'> Eliminar </Button>
        </form>
    </div>
}
