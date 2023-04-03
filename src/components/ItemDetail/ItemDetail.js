import { Link, useNavigate } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import LowStockMessage from "./LowStockMessage"



const ItemDetail = ({ item }) => {
    const {agregarAlCarrito , isInCart } = useContext(CartContext)

    // console.log(isInCart(item.id))


    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()

    const handeVolver = () => {
        navigate(-1)
    }


    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }


    if(item.stock === 0 ) {
        return (
            <div>
                No hay Stock de este producto!
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2>{item.nombreAlimento}</h2>
            <img src={item.img} alt={item.nombreAlimento}/>
            <p>{item.descripcion}</p>
            <p>Precio : ${item.precio}</p>
            { item.stock <= 5 && <LowStockMessage stock={item.stock}/>}


            
             {
                    isInCart(item.id) 
                    ? <Link  to="/cart" className="btn btn-primary my-3" > Finalizar </Link>                   
                    : <ItemCount
                         max={item.stock}
                         cantidad={cantidad}
                         setCantidad={setCantidad}
                         handleAgregar = {handleAgregar} />
            }
            

            <button onClick={handeVolver} className="btn btn-primary"> Volver </button>
        </div>


    )
}


export default ItemDetail