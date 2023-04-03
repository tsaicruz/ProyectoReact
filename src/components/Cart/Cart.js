import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import {BsFillTrashFill} from "react-icons/bs"

const Cart = () => {
 const {cart ,totalCompra, vaciarCarrito, eliminarDelCarrito} = useContext(CartContext)

    return (
            <div className= "container my-5">
                <h2> Tu compra </h2>
                <hr/>
        {
            cart.map((prod) => (
                <div key={prod.id}>
                    <h4>{prod.nombreAlimento}</h4>
                    <img src={prod.img} alt={prod.nombreAlimento}/>
                    <p> Precio Unitario : ${prod.precio}</p>
                    <p> Cantidad : {prod.cantidad} </p>
                    <p> Precio Total : ${prod.precio * prod.stock}</p> 
                    <button onClick={ () => { eliminarDelCarrito(prod.id)}} className="btn btn-danger"><BsFillTrashFill/></button>
                    <hr/>                    
                     </div>
            )   )
        }
                <h3>Total : ${totalCompra().toFixed(2)}</h3>
                <button onClick={vaciarCarrito} className="btn btn-danger"> Vaciar Carrito</button>

            </div>
    )
}

export default Cart 