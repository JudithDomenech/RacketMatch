import './UpdatePasswordForm.sass'
import { updateUserPassword } from '../logic'
import { Button, Link, Input } from '.'

export function UpdatePasswordForm({ onBack }) {

        const updatePassword = async event => {
            event.preventDefault()

            const { target: { currPassword: { value: currPassword }, newPassword: { value: newPassword }, confirmPassword: { value: confirmPassword } } } = event
            try {
                await updateUserPassword(sessionStorage.token, currPassword, newPassword, confirmPassword)
            } catch (error) {
                alert(error.message)
            }
        }


        return <div className=''>
            <form className="update-password__form" onSubmit={updatePassword}>
                <Input className="update-password__input" id="currPassword" type="password" name="currPassword" label="Contraseña Actual" />
                <Input className="update-password__input" id="password" type="password" name="newPassword" label="Nueva contraseña"/>
                <Input className="update-password__input" id="confirmPassword" type="password" name="confirmPassword" label="Confirmar contraseña" />

                <Button className="update-password__button" type='submit'>Editar </Button>
                <Link  className="update-password__link" href="" onClick={onBack}>Atrás</Link>
            </form>
        </div>

    }

