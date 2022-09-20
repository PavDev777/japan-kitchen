import React from "react";
import styles from "./Input.module.scss";

export const Input = ({ label, input }) => {
  return (
    <div className={styles.input}>
      <label className={styles.inputLabel} htmlFor={input.id}>
        {label}
      </label>
      <input {...input} className={styles.inputForm} />
    </div>
  );
};
