
import { Link } from "react-router-dom";

const Item = ( {item}) => {

  return (    
        <div className="col-3 m-2">
          <img src={item.img} alt={item.nombreAlimento} />
          <h4>{item.nombreAlimento}</h4>
          <p>{item.descripcion}</p>
          <p>Precio : ${item.precio}</p>
          <Link to={`/detail/${item.id}`} className="btn btn-primary"> Ver más </Link>
        </div>
  )
};


export default Item