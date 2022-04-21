import './DeleteAccount.sass'
import { DeleteAccountForm, UserIcon } from '../components'


export const DeleteAccount = ({ goToLogin}) => {


    return <>
        <div className='delete-account__wrap'>   
            <h1> Eliminar cuenta </h1>
            <DeleteAccountForm onDeleted={goToLogin} />
        </div>
    </>
}