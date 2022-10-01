import styles from "./Header.module.scss";
import sushi from "../../assets/sushi lesson 111 .jpg";
import { CartHeaderButton } from "./CartHeaderButton";

export const Header = ({ setIsVisibleCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Японская кухня</h1>
        <CartHeaderButton setIsVisibleCart={setIsVisibleCart} />
      </header>
      <div className={styles.image}>
        <img src={sushi} alt="Суши" />
      </div>
    </>
  );
};
