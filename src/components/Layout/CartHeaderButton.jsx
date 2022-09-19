import React from "react";
import { CartIcon } from "./CartIcon";

import styles from "./CartHeaderButton.module.scss";

export const CartHeaderButton = () => {
  return (
    <button className={styles.button}>
      <span>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.cartNumbers}>2</span>
    </button>
  );
};
