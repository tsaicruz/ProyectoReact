import CartLogo from './cartLogo.png'


const CartWidget = () => {
    return (
        <div>
            <img src={CartLogo} alt="logo" className='headerLogo'/>
            <span>0</span>
        </div>
    )
}

export default CartWidget