import { useContext } from "react";
import styles from "./ListItem.module.scss";
import { ItemMealForm } from "./ItemMealForm";
import { CartContext } from "../../store/cartContext";

export const ListItem = ({ name, description, price, id }) => {
  const cartContext = useContext(CartContext);

  const addToCartHandler = (amount) => {
    const obj = {
      id,
      name,
      amount,
      price,
    };
    cartContext.addItem(obj);
  };

  return (
    <li className={styles.listItem}>
      <div className={styles.listItemSingle}>
        <h3>{name}</h3>
        <span>{description}</span>
        <div className={styles.listItemPrice}>${price.toFixed(2)}</div>
      </div>
      <div>
        <ItemMealForm onAddToCart={addToCartHandler} id={id} />
      </div>
    </li>
  );
};
