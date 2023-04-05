import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import {BsFillTrashFill} from "react-icons/bs"
import { Link } from "react-router-dom"


const Cart = () => {
 const {cart ,totalCompra, vaciarCarrito, eliminarDelCarrito} = useContext(CartContext)

    if(cart.length === 0 ) {
        return (
            <div className= "container my-5">                
                <h2>No tenes productos agregados</h2>
                <hr/>
                <Link to="/" className="btn btn-primary"> Volver </Link>
            </div> 
        )
    }


         return(
            <div className="container my-5">
                <h2> Tu compra </h2>
                <hr/>
        {
            cart.map((prod) => (
                <div key={prod.id}>
                    <h4>{prod.nombreAlimento}</h4>
                    <img src={prod.img} alt={prod.nombreAlimento}/>
                    <p> Precio Unitario : ${prod.precio}</p>
                    <p> Cantidad : {prod.cantidad} </p>
                    <p> Precio Total : $ {prod.precio * prod.cantidad}</p> 
                    <button onClick={ () => { eliminarDelCarrito(prod.id)}} className="btn btn-danger"><BsFillTrashFill/></button>
                    <hr/>                    
                </div>
            ))
        }       <div className=""> 
                <h3>Total : ${totalCompra().toFixed(2)}</h3>
                <button onClick={vaciarCarrito} className="btn btn-danger"> Vaciar Carrito</button>
                <Link className="btn btn-success" to="/checkout"> Terminar la compra</Link>
                </div>
            </div>

         )
    }


export default Cart 