import "./DishCard.css";
import deliveryBike from "../../images/motorbike-delivery-icon.svg";

function DishCard({ name, price, info, imageUrl }) {
    return (
        <section className="dish-card">
            <img src={imageUrl} width="100%" alt={name}></img>

            <section className="dish-info">
                <section className="dish-name-price markazi-text-medium">
                    <p>{name}</p>
                    <p>
                        <span className="highlight-orange">${price}</span>
                    </p>
                </section>

                <p className="karla-regular">{info}</p>

                <section className="card-deliver">
                    <button className="deliver-button markazi-text-medium">
                        Order a delivery
                    </button>
                    <img
                        className="delivery-bike"
                        alt="delivery bike icon"
                        src={deliveryBike}
                    ></img>
                </section>
            </section>
        </section>
    );
}

export default DishCard;
