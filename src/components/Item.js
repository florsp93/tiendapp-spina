const Item = ({ title, description, price, pictureUrl }) =>
    <div className="itemDiv">
        <div>
            <img className="itemImage" src={`../images/${pictureUrl}`} alt="" />
        </div>
        <div>
            <h4>{title}</h4>
            <p>{description}</p>
            <p>$ {price}</p>
        </div>
    </div>;
export default Item;