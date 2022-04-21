import './App.sass'
import {
  HeaderBar,
  NavigateMenu,
} from './components'

import {
  Register,
  Login,
  Home,
  Profile,
  Favorites,
  UpdatePassword,
  RacketDetails,
  SearchUserRacket,
  DeleteAccount
} from './pages'

import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { validators } from 'commons'

const { validateToken } = validators

export default function App() {

  const isTokenValid = () => {
    try {
    return sessionStorage.token && validateToken(sessionStorage.token)

    }
    catch (error) {
      alert('Sesión finalizada')
      delete sessionStorage.token
      return false
    }
  }

  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  const showLogin = () => navigate('acceder')
  const showRegister = () => navigate('registrar')
  const showSearch = query => navigate(`search?query=${query}`)
  const showRacketDetails = racketId => navigate(`pala/${racketId}`)
  const showUserRacket = () => navigate('tu-pala')
  const showSearchUserRacket = ({ type, weight, player, level }) => navigate(`tu-pala/search?type=${type}&weight=${weight}&player=${player}&level=${level}`)
  const showProfile = () => navigate('perfil')
  const showFavorites = () => navigate('favoritos')
  const showUpdatePassword = () => navigate('cambiar-contrasena')
  const showDeleteAccount = () => navigate('eliminar-cuenta')
  const showHome = () => navigate('/')


  return <div>

  
      <HeaderBar className='home__header-bar' onHome={showHome} onLogin={showLogin} validateToken={isTokenValid} />
    
    <Routes>
      <Route path="/*" element={<Home goToDetails={showRacketDetails} onSearch={showSearch} validateToken={isTokenValid}/>} />
      <Route path="acceder" element={!isTokenValid() ? <Login onLoggedIn={showHome} onRegister={showRegister} /> : <Navigate replace to="/" />} />
      <Route path="registrar" element={!isTokenValid() ? <Register onRegistered={showLogin} onLogin={showLogin} /> : <Navigate replace to="/" />} />
      <Route path="perfil" element={isTokenValid() && <Profile onUpdatePassword={showUpdatePassword} onLogout={showLogin} onDeleteAccount={showDeleteAccount} />} />
      <Route path="cambiar-contrasena" element={isTokenValid() && <UpdatePassword onBack={goBack} />} />
      <Route path="eliminar-cuenta" element={isTokenValid() ? <DeleteAccount  goToLogin={showLogin} /> : <Navigate replace to='/' />} />
      <Route path="/pala/:racketId" element={<RacketDetails validateToken={isTokenValid}/>} />
      <Route path="favoritos" element={isTokenValid() && <Favorites goToDetails={showRacketDetails} validateToken={isTokenValid} />} />
      <Route path="tu-pala/*" element={isTokenValid() && <SearchUserRacket onRacket={showRacketDetails} onSearchUserRacket={showSearchUserRacket} validateToken={isTokenValid}/>} />

      <Route path="page-not-found" element={!isTokenValid() ? <h1>Sorry, esta página no existe :P</h1> : <Navigate replace to="/" />} />
      <Route path="/*" element={<Navigate replace to='page-not-found' />} />

    </Routes>

      {isTokenValid() && <NavigateMenu className='home__navigate-menu' onProfile={showProfile} onFavorites={showFavorites} onSearchUserRacket={showUserRacket} onHome={showHome} />}
 

  </div>

}