import React from "react";
import styles from "./Button.module.scss";

export const Button = ({ children, type, className }) => {
  return (
    <button type={type || "button"} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
};
