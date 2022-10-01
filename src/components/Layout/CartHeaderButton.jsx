import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/cartContext";
import { CartIcon } from "./CartIcon";
import classNames from "classnames";

import styles from "./CartHeaderButton.module.scss";

export const CartHeaderButton = ({ setIsVisibleCart }) => {
  const [isButtonAnimation, setIsButtonAnimation] = useState(false);
  const { items } = useContext(CartContext);

  const totalCartItems = items?.reduce(
    (current, item) => current + item.amount,
    0
  );

  const classesButton = classNames([styles.button], {
    [styles.anima]: isButtonAnimation,
  });

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsButtonAnimation(true);
    const timer = setTimeout(() => {
      setIsButtonAnimation(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={classesButton} onClick={setIsVisibleCart}>
      <span>
        <CartIcon />
      </span>
      <span>Корзина</span>
      <span className={styles.cartNumbers}>{totalCartItems}</span>
    </button>
  );
};
