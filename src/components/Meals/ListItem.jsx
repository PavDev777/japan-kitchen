import React from "react";
import styles from "./ListItem.module.scss";
import { ItemMealForm } from "./ItemMealForm";

export const ListItem = ({ name, description, price, id }) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.listItemSingle}>
        <h3>{name}</h3>
        <span>{description}</span>
        <div className={styles.listItemPrice}>${price.toFixed(2)}</div>
      </div>
      <div>
        <ItemMealForm />
      </div>
    </li>
  );
};
