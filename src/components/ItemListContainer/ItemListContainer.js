import './ItemListContainer.scss'


const ItemListContainer = ( {greeting} ) => {

    return (
        <div className="contenedor">
            <h2>Todo para tu mascota</h2>
            {greeting}
        </div>
    )
}

export default ItemListContainer