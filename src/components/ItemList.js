import Item from "./Item";

const ItemList = ({ itemsToShow }) =>
    <div>
        {itemsToShow.map((item =>
            (<Item key={item.id} price={item.price} title={item.title} description={item.description} pictureUrl={item.pictureUrl} />)
        ))}
    </div >;

export default ItemList;