import React, { useImperativeHandle } from "react";
import "./CheckoutProduct.css";
import { useStatevalue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStatevalue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>&#x20B9;</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
