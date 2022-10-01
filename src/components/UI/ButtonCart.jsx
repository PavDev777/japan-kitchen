import React from "react";
import styles from "./ButtonCart.module.scss";

export const ButtonCart = ({ children, incCartItem, decCartItem }) => (
  <button
    onClick={incCartItem ? incCartItem : decCartItem}
    className={styles.ButtonCart}
  >
    {children}
  </button>
);
