import { useNavigate } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"



const ItemDetail = ({ item }) => {
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
        console.log(newItem)
    }

    return (
        <div className="container my-5">
            <h2>{item.nombreAlimento}</h2>
            <img src={item.img} alt={item.nombreAlimento}></img>
            <p>{item.descripcion}</p>
            <p>Precio : ${item.precio}</p>
            <ItemCount
                max={item.stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                handleAgregar = {handleAgregar}
            />
            <button onClick={handeVolver} className="btn btn-primary"> Volver </button>
        </div>


    )
}


export default ItemDetail