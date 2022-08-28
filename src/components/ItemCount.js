import { useState } from "react";

const ItemCount = ({ stock, setStock, cartCounter }) => {
    const [itemsCounter, setItemsCounter] = useState(cartCounter);

    const handleAddItems = () => {
        if (stock <= 0) {
            alert('No hay mas stock');
        } else {
            setItemsCounter(itemsCounter => itemsCounter + 1);
            setStock(stock => stock - 1);
        }
    };

    const handleRemoveItems = () => {
        setItemsCounter(itemsCounter => itemsCounter - 1);
        setStock(stock => stock + 1);
    };

    return (
        <div className="counterDiv">
            <h3 className="counterTitle">Items Seleccionados</h3>
            <div className="counterButtonsDiv">
                <button onClick={handleAddItems}>+</button>
                <h4>{itemsCounter}</h4>
                <button onClick={handleRemoveItems} disabled={!itemsCounter ? true : false}>-</button>
            </div>
        </div>
    );
};

export default ItemCount;