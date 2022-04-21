import './UpdatePassword.sass'
import { UpdatePasswordForm } from '../components'

export function UpdatePassword({ onBack }) {

    return <div className='update-password__container'>

        <div className=''>
            <UpdatePasswordForm onBack={onBack}/>
        </div>

    </div>

}
