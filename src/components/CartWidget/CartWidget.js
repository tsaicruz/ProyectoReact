import { useContext } from 'react'
import CartLogo from './cartLogo.png'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './CartWidget.scss' 


const CartWidget = () => {

    const {cart, totalCantidad} = useContext(CartContext)


    return (
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : " "}`}>
            <img src={CartLogo} alt="logo" className='headerLogo'/>
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget