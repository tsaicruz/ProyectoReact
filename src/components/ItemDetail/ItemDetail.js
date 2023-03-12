import { useNavigate } from "react-router-dom"



const ItemDetail = ({item}) => {

    const navigate = useNavigate()

    const handeVolver = () => {
        navigate(-1)
    }


    return(
        <div className="container my-5">
        <h2>{item.nombreAlimento}</h2>
        <img src= {item.img} alt={item.nombreAlimento}></img>
        <p>{item.descripcion}</p>
        <p>Precio : ${item.precio}</p> 

        <button onClick={handeVolver} className="btn btn-primary"> Volver </button>    
        </div>


    )
}


export default ItemDetail