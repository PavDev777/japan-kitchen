import React, { useContext, useEffect } from "react";
import { Modal } from "../UI/Modal";
import styles from "./Cart.module.scss";
import { Button } from "../UI/Button";
import { CartContext } from "../../store/cartContext";
import { CartItem } from "./CartItem";

export const Cart = ({ setIsVisibleCart }) => {
  const { items, totalCartItems, addItem, removeItem } =
    useContext(CartContext);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  const incCartItem = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const decCartItem = (id) => {
    removeItem({ id });
  };

  return (
    <Modal setIsVisibleCart={setIsVisibleCart}>
      {items.length > 0 ? (
        <>
          <ul className={styles.cartItems}>
            {items.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                incCartItem={incCartItem.bind(null, item)}
                decCartItem={decCartItem.bind(null, item.id)}
              />
            ))}
          </ul>
          <div className={styles.CartTotalItems}>
            <span>Итого</span>
            <span>{totalCartItems?.toFixed(2)}$</span>
          </div>
        </>
      ) : (
        <p className={styles.CartEmpty}>Ваша корзина пустая</p>
      )}
      <div className={styles.CartActions}>
        <Button onClick={setIsVisibleCart} close>
          {" "}
          Закрыть{" "}
        </Button>
        {items.length > 0 && <Button> Заказать </Button>}
      </div>
    </Modal>
  );
};
