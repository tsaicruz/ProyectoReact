import "./Item.scss"
import { Link } from "react-router-dom";

const Item = ( {item}) => {

  return (    
        <div className="itemContainer col-4 m-5 ">    
          <img src={item.img} alt={item.nombreAlimento} />
          <h4>{item.nombreAlimento}</h4>
          <p className="itemDescripcion">{item.descripcion}</p>
          <p>Precio : ${item.precio}</p>
          <Link to={`/detail/${item.id}`} className="btn btn-primary"> Ver más </Link>
        </div>
  )
};


export default Item