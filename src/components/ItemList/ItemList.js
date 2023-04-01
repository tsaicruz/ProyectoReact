import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div>
      <h2>Todo para tu mascota</h2>
      <hr/>      
      <div className="row my-5">
        {items.map((producto) => (
          <Item key={producto.id} item={producto} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
