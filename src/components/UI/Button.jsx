import styles from "./Button.module.scss";
import classNames from "classnames";

export const Button = ({ children, type, close, onClick }) => {
  const classes = classNames([styles.button], {
    [styles.closeButton]: close,
  });

  return (
    <button onClick={onClick} type={type || "button"} className={classes}>
      {children}
    </button>
  );
};
