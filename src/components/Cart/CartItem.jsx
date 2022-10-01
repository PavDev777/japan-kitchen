import styles from "./CartItem.module.scss";
import { ButtonCart } from "../UI/ButtonCart";

export const CartItem = ({ name, price, amount, incCartItem, decCartItem }) => {
  return (
    <li className={styles.cartItem}>
      <div className={styles.cartItemInfo}>
        <h2>{name}</h2>
        <div className={styles.cartItemPriceAmount}>
          <span className={styles.cartItemPrice}>{price}$</span>
          <div className={styles.cartItemAmount}>x {amount}</div>
        </div>
      </div>
      <div className={styles.cartItemButtons}>
        <ButtonCart incCartItem={incCartItem}>+</ButtonCart>
        <ButtonCart decCartItem={decCartItem}>-</ButtonCart>
      </div>
    </li>
  );
};
