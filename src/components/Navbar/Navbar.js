import './Navbar.scss'
import logo from './logo.png'
import CartWidget from '../CartWidget/CartWidget'


export const Navbar = () => {

    return (
            <header className="header">
                <div className="headerContainer">
                <img src={logo} alt="logo" className='headerLogo'/>
                <h1>The Catnip</h1>
                <nav className="navbar">
                    <a href="https://www.facebook.com/" className="link1">Facebook</a>
                    <a href="https://www.instagram.com/" className="link2">Instagram</a>
                    <a href="https://www.twitch.tv/" className="link3">Twitch</a>
                </nav>
                <CartWidget/>
            </div>
            
            </header>
    )
}
