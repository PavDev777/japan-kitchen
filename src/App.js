import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";
import styles from "./App.module.scss";
import { Cart } from "./components/Cart/Cart";
import { useState } from "react";
import { CartContextProvider } from "./store/CartContextProvider";

export const App = () => {
  const [visibleCart, setIsVisibleCart] = useState(false);

  return (
    <CartContextProvider>
      {visibleCart && (
        <Cart setIsVisibleCart={() => setIsVisibleCart(!visibleCart)} />
      )}
      <Header setIsVisibleCart={() => setIsVisibleCart(!visibleCart)} />
      <main className={styles.mainPosition}>
        <Meals />
      </main>
    </CartContextProvider>
  );
};
