import './Navbar.scss'
import logo from './logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'


export const Navbar = () => {
    const { user,logout} = useContext(LoginContext)

    return (
            <header className="header">
                <div className="headerContainer">
                    <Link to="/"><img src={logo} alt="logo" className='headerLogo'/></Link>                
                <h1>The Catnip</h1>
                <nav className="navbar">
                    <Link to="/" className="link">Inicio</Link>
                    <Link to="/productos/aves" className="link">Aves</Link>
                    <Link to="/productos/roedores" className="link">Roedores</Link>
                    <Link to="/productos/perro" className="link">Perros</Link>
                    <Link to="/productos/gato" className="link">Gatos</Link>
                    <Link to="/nosotros" className="link">Nosotros</Link>
                    <Link to="/contacto" className="link">Contacto</Link>
                </nav>
               <CartWidget/>
               
            </div>
            <div className='login'>
                <h6> Bienvenido {user.email}</h6>
                <button className='btn btn-danger' onClick={logout}> Cerrar sesion </button>
            </div>
            </header>
    )
}
