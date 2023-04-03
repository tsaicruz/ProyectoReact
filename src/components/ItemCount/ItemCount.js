

const ItemCount = ({ max, cantidad, setCantidad, handleAgregar}) => {



    const handlerSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <div className="my-4">
            <button onClick={handleRestar} className={`btn ${cantidad === 1 ? "btn-outline-danger" : "btn-outline-primary" }` } disabled={cantidad===1} >-</button>
            <span className="mx-2">{cantidad}</span>
            <button onClick={handlerSumar} className={`btn ${cantidad === max ? "btn-danger" : "btn-primary" }`} disabled={cantidad === max} >+</button>
            <br />
            <button onClick={handleAgregar} className="btn btn-primary my-3">Agregar</button>
        </div>
    )
}

export default ItemCount;