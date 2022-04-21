import './Profile.sass'
import { ProfileForm, Link, Button } from '../components'

export const Profile = ({ onUpdatePassword, onLogout, onDeleteAccount }) => {

  const goToUpdatePassword = event => {
    onUpdatePassword()
  }

  const logout = () => {
    delete sessionStorage.token
    onLogout()
  }

  return <div className='profile__container'>
    <div className='profile__card'>
      <ProfileForm />
      <Link onClick={goToUpdatePassword} href="" className='profile__link' >Cambiar Contraseña</Link>
      <div className='profile__wrap'>
        <Button className='profile-wrap__button' onClick={logout} type='button'> Cerrar sessión</Button>
        <Link className='profile-wrap__link' onClick={onDeleteAccount} href=""> Borrar Cuenta</Link>
      </div>
    </div>
  </div>
}