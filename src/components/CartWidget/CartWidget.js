import { useContext } from 'react'
import CartLogo from './cartLogo.png'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {

    const {totalCantidad} = useContext(CartContext)


    return (
        <Link to="/cart" style={{
            fontSize: '26px',
            color:'white'
        }}>
            <img src={CartLogo} alt="logo" className='headerLogo'/>
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget