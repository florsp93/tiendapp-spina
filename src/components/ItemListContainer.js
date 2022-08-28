import ItemList from "./ItemList";

const ItemListContainer = ({ itemsToShow }) =>
    <div className="itemListContainer">
        <h3>Catalogo</h3>
        <ItemList itemsToShow={itemsToShow} />
    </div>;

export default ItemListContainer;