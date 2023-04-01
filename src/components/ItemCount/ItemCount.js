

const ItemCount = ({ max, cantidad, setCantidad, handleAgregar}) => {



    const handlerSumar = () => {
        cantidad < max && setCantidad(cantidad + 1)
    }

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    return (
        <div className="my-4">
            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span className="mx-2">{cantidad}</span>
            <button onClick={handlerSumar} className="btn btn-outline-primary">+</button>
            <br />
            <button onClick={handleAgregar} className="btn btn-primary my-3">Agregar</button>
        </div>
    )
}

export default ItemCount;