import './Navbar.scss'
import logo from './logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


export const Navbar = () => {

    return (
            <header className="header">
                <div className="headerContainer">
                <img src={logo} alt="logo" className='headerLogo'/>
                <h1>The Catnip</h1>
                <nav className="navbar">
                    <Link to="/" className="link">Inicio</Link>
                    <Link to="/productos/aves" className="link">Aves</Link>
                    <Link to="/productos/roedores" className="link">Roedores</Link>
                    <Link to="/productos/perro" className="link">Perros</Link>
                    <Link to="/productos/gato" className="link">Gatos</Link>
                </nav>
                <CartWidget/>
            </div>
            
            </header>
    )
}
