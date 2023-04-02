import { useEffect, useState } from "react";
import "./ItemListContainer.scss";
import { pedirDatos } from "../../pedirDatos/pedirDatos";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";



const ItemListContainer = () => {


  const [productos, setProductos] = useState([])
  const [loading, SetLoading] = useState(true)

  const {categoriaId} = useParams()
  
  console.log(categoriaId)

  useEffect(() => {
    SetLoading(true)


    pedirDatos()
      .then((response) => {
        if (!categoriaId) {
          setProductos(response)
        } else {
          setProductos(response.filter((prod) => prod.categoria === categoriaId))
        }        

      })
      .catch((error) => {
        console.log(error)
      })
      .finally(()=>{
        SetLoading(false)
      })
  }, [categoriaId]);


  return (
    <div className="contenedor">
        {
            loading ? <h2> Cargando .. </h2> :  <ItemList items = {productos}/>
        }
    </div>
  )
}

export default ItemListContainer;
