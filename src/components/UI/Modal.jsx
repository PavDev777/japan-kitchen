import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

export const Backdrop = ({ setIsVisibleCart }) => (
  <div className={styles.backdrop} onClick={setIsVisibleCart}></div>
);

export const ModalWindow = ({ children }) => (
  <div className={styles.modal}>
    <div className={styles.content}>{children}</div>
  </div>
);

const portalElement = document.getElementById("overlay");

export const Modal = ({ children, setIsVisibleCart }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop setIsVisibleCart={setIsVisibleCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{children}</ModalWindow>,
        portalElement
      )}
    </>
  );
};
